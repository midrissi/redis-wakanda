var commands = require('./lib/commands');
var utils = require('./lib/utils');
var DEFAULT_CONFIG = {
	host: 'localhost',
	port: 6379,
	tries: {
		count: 0,
		each: 5000,
		on: ['close', 'error']
	}
};
var SOCKET_EVENT_PREFIX = 'socket:';
var CONSTANTS = utils.CONSTANTS;

// Socket
var net = require('net');
var socket = null;
var connected = false;

var Redis = require('./lib/event').extend({
	init: function(config) {
		var that = this;

		config = utils.extend(DEFAULT_CONFIG, config);

		this.host = config.host;
		this.port = config.port;
		this.tries = config.tries;
		this.connected = false;
		this.isPipelining = false;
		this.stack = [];
		this.callbacks = [];

		this.on(SOCKET_EVENT_PREFIX + 'connect', function() {
			this.connected = true;
			delete this.__count__;

			while (this.stack.length > 0) {
				this.execute();
			}
		});

		this.on(SOCKET_EVENT_PREFIX + 'data', function (buffer) {
			utils.each(buffer, function () {
				var args = Array.prototype.slice.call(arguments);
				args.unshift('message');

				that.trigger.apply(that, args);
			});
		});

		this.on({
			'message': function (message) {
				var callback = this.callbacks.pop();
				if(typeof callback === 'function'){
					if(message instanceof utils.Error){
						callback.call(this, undefined, message);
					}else{
						callback.call(this, message);
					}
				}
			}
		});

		if (typeof this.tries === 'object' && Array.isArray(this.tries.on)) {
			this.tries.on.forEach(function(event) {
				that.on(SOCKET_EVENT_PREFIX + event, callback);
			});

			function callback () {
				this.connected = false;
				this.__count__ = this.__count__ || 0;

				if (this.tries.count !== 0 && this.tries.each > 0 && this.__count__ !== this.tries.count) {
					setTimeout(function() {
						if (!that.is(':connected')) {
							that.reconnect();
						}

						that.__count__++;
					}, this.tries.each);
				}else {
					this.trigger(SOCKET_EVENT_PREFIX + 'fail');
				}
			}
		}

		this.reconnect();
	}
});

Redis.prototype.reconnect = function() {
	var that = this,
		events = ['data', 'error', 'connect', 'close'],
		funcArgs = arguments;

	socket = new net.Socket();

	events.forEach(function(event) {
		socket.addListener(event, function() {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(SOCKET_EVENT_PREFIX + event);

			that.trigger.apply(that, args);
		});
	});

	socket.connect(that.port, that.host);
};

Redis.prototype.send = function() {
	var args = Array.prototype.slice.call(arguments);

	if (this.is(':connected') && !this.is(':pipelining')) {
		if(typeof args[args.length - 1] === 'function'){
			this.callbacks.unshift(args.pop());
		}else{
			this.callbacks.unshift(null);
		}

		socket.write(args.join(' ') + CONSTANTS.LF);
	} else {
		this.stack.unshift(args);
	}

	return this;
};

Redis.prototype.is = function(type) {
	switch (type) {
		case ':connected':
			return this.connected;
			break;
		case ':pipelining':
			return this.isPipelining;
			break;
	}
};

Redis.prototype.execute = function() {
	var command = '';

	if(!this.is(':connected')){
		return false;
	}

	while (this.stack.length > 0) {
		var args = this.stack.pop();

		if(typeof args[args.length - 1] === 'function'){
			this.callbacks.unshift(args.pop());
		}else{
			this.callbacks.unshift(null);
		}

		command += args.join(' ') + CONSTANTS.CRLF;
	}

	if(command.length){
		socket.write(command);
	}

	return true;
};

Redis.prototype.pipelining = function(pipelining) {
	this.isPipelining = pipelining !== false;

	return this;
};

commands.forEach(function(command) {
	Redis.prototype[command.func] = function() {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(command.command);
		
		for(var i = 0, arg; arg = args[i]; i++){
			if(typeof arg === 'string' && arg.indexOf(" ") >= 0){
				args[i] = JSON.stringify(arg);
			}
		}
		
		this.send.apply(this, args);
		return this;
	};

	Redis.prototype[command.func].group = command.group;
	Redis.prototype[command.func].summary = command.summary;
});

module.exports = Redis;