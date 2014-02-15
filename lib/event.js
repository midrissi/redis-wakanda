/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
// Source: http://ejohn.org/blog/simple-javascript-inheritance/
var initializing = false,
    fnTest = /xyz/.test(function() {
        xyz;
    }) ? /\b_super\b/ : /.*/;

// The base Class implementation (does nothing)
var Class = function() {};

// Create a new Class that inherits from this class
Class.extend = function(prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
        // Check if we're overwriting an existing function
        prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn) {
            return function() {
                var tmp = this._super;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                var ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
            };
        })(name, prop[name]) : prop[name];
    }

    // The dummy class constructor
    function Class() {
        // All construction is actually done in the init method
        if (!initializing && this.init) this.init.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
};

/* 
 * Simple event implementation
 */

var Event = Class.extend();

Event.prototype.on = function on(arg0, arg1) {
	this._listeners =  this._listeners || {};
	
	switch(typeof arg0){
		case 'string':
			if(Object.prototype.toString.call(this._listeners[arg0]) !== '[object Array]'){
				this._listeners[arg0] = [];
			};
			
			if(typeof arg1 === 'function'){
				this._listeners[arg0].push(arg1);
			};
			
			break;
		case 'object':
			for(var attr in arg0){
				var func = arg0[attr];
				
				if(Object.prototype.toString.call(this._listeners[attr]) !== '[object Array]'){
					this._listeners[attr] = [];
				};
				
				if(typeof func === 'function'){
					this._listeners[attr].push(func);
				};
			}
			break;
	}
	
	return this;
};

Event.prototype.off = function off(evName) {
	delete this._listeners[evName];
};

Event.prototype.trigger = function trigger(name) {
	if(Object.prototype.toString.call(this._listeners[name]) === '[object Array]'){
		var _listeners = this._listeners[name];
		var params = [];
		
		for(var i = 1, param; param = arguments[i]; i++){
			params.push(param);
		};
		
		for(var i = 0, listener; listener = _listeners[i]; i++){
			listener.apply(this, params);
		};
	}
};

module.exports = Event;