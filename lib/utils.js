exports.extend = function(destination, source) {
	for (var property in source) {
		if (typeof source[property] === "object") {
			destination[property] = destination[property] || {};
			arguments.callee(destination[property], source[property]);
		} else {
			destination[property] = source[property];
		}
	}
	return destination;
};

exports.Error = function(type, string) {
	this.message = string;
	this.type = type;
};

exports.each = function(buffer, fn) {
	var CHARS = exports.CONSTANTS.CHARS;
	var index = 0;

	if (!Buffer.isBuffer(buffer)) {
		buffer = new Buffer(0);
	}

	function next(nb) {
		if (index >= buffer.length) {
			return;
		}

		var res = null;

		if (typeof nb === 'number') {
			res = [];
			
			for(var i =0; i<nb; i++){
				res.push(nextItem());
			}
		}else{
			res = nextItem();
		}

		function nextItem() {
			var type = buffer.readInt8(index++);
			var item;
			var start = index;

			switch (true) {
				case type === CHARS.ERROR:
					item = new exports.Error();

					while (buffer.readInt8(index++) !== CHARS.SPACE) {}

					item.type = buffer.toString('utf8', start, index - 1);
					start = index;

					while (buffer.readInt8(index++) !== CHARS.CR || buffer.readInt8(index) !== CHARS.LF) {}

					item.message = buffer.toString('utf8', start, index - 1);

					index++;

					break;
				case type === CHARS.STRING || type === CHARS.INTEGER:
					while (buffer.readInt8(index++) !== CHARS.CR || buffer.readInt8(index) !== CHARS.LF) {}

					item = buffer.toString('utf8', start, index - 1);

					if(type === CHARS.INTEGER){
						item = parseInt(item);
					}

					index++;

					break;
				case type === CHARS.BSTRING:
					var length;

					while (buffer.readInt8(index++) !== CHARS.CR || buffer.readInt8(index) !== CHARS.LF) {}

					length = buffer.toString('utf8', start, index - 1);
					length = parseInt(length);

					if(length < 0){
						item = null;
					}else{
						item = buffer.toString('utf8', ++index, index + length);
						index += length + 1;
					}

					index++;
					
					break;
				case type === CHARS.ARRAY:
					var length;

					while (buffer.readInt8(index++) !== CHARS.CR || buffer.readInt8(index) !== CHARS.LF) {}

					length = buffer.toString('utf8', start, index - 1);
					length = parseInt(length);

					index++;

					item = next(length);
					
					break;
			}

			return item;
		}

		return res;
	}
	
	while(index < buffer.length){
		fn(next());
	}
}

exports.CONSTANTS = {
	CRLF: "\r\n",
	CR: "\r",
	LF: "\n",
	CHARS: {
		ERROR: 0x2d, //"-".charCodeAt(0),
		INTEGER: 0x3a, //":".charCodeAt(0),
		BSTRING: 0x24, //"$".charCodeAt(0),
		ARRAY: 0x2a, //"*".charCodeAt(0),
		STRING: 0x2b, //"+".charCodeAt(0),
		CR: 0x0d,
		LF: 0x0a,
		SPACE: 0x20 //" ".charCodeAt(0)
	}
};