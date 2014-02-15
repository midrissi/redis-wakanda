var Redis = require('redis-wakanda');

var r = new Redis();

var res;

// Authenticate to the server
r.auth('foobared');

// Ping the server
r.ping(function(data, error){
  // The data must contain "PONG"
});

// Get the foo key
r.get('foo',function(data, error){
  res = data;
  exitWait();
});

wait();

// res must contain the value of the key "foo"
res;
