redis-wakanda - A wakanda Redis client
======================================

This is a complete Redis client for wakanda.  It supports all Redis commands.

## Usage

Simple example, included as `test/simple.js`:

```js
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
```

you can pass to the constructor the following attributes:

* `host`: The server address [127.0.0.1 by default]
* `port`: The port of the server [6379 by default]
* `tries`: This attributes describe how the server handles the reconnection:
    * `count`: The number of reconnection attempts (-1 to infinite attemps) [0 by default] 
    * `each`: The time (in ms) between two reconnection attempts [5000 by default]
    * `on`: The list of the events that triggers the resconnection attemps[['close', 'error'] by default]

example:
```js
    var Redis = require('redis-wakanda');
    
    // The modules will try to reconnect to the server indefinitely
    var r = new Redis({
    	tries: {
    		count:-1
    	}
    });
```

## Pipelining

In order to enable the `pipelining`, the function `pipeline` must be called:

```js
    var Redis = require('redis-wakanda');
    var r = new Redis();
    
    // Enable the pipelining
    r.pipelining();
    
    // These two request will be sent in one Redis request
    r.get('foo', function(data, err){
       debugger 
    });
    
    r.get('foo', function(data, err){
       debugger 
    });
    
    // Send the request
    r.execute();
    
    // Disable the pipelining
    r.pipeline();
    
    // This request will be sent immediatly
    r.set('foo', 'new value', function(data, err){
       debugger 
    });
    
    wait(5000);
```

## Sending Commands

```js
    var Redis = require('redis-wakanda');
    
    var r = new Redis();
    
    // This request:
    r.send('GET foo', function(data, err){
       debugger 
    });
    
    // Is equivalent to:
    r.get('foo', function(data, err){
       debugger 
    });
    
    wait(5000);
```

## Connection Events

`client` will trigger some events about the state of the connection to the Redis server.

### "socket:connect"

`client` will trigger `socket:connect` a connection is established to the Redis server and the server reports
that it is ready to receive commands.  Commands issued before the `socket:connect` event are queued.

### "socket:data"

`client` will trigger `socket:data` when data is received from the Redis server.

### "socket:error"

`client` will trigger `socket:error` when encountering an error connecting to the Redis server.

### "socket:close"

`client` will trigger `socket:close` when encountering the connection to the Redis server is closed.

### "message"

`client` will trigger `message` when a parsed message is received from the Redis server.

# API

##append
###### key value ######
Append a value to a key
##auth
###### password ######
Authenticate to the server
##bgrewriteaof
######  ######
Asynchronously rewrite the append-only file
##bgsave
######  ######
Asynchronously save the dataset to disk
##bitcount
###### key [start] [end] ######
Count set bits in a string
##bitop
###### operation destkey key [key ...] ######
Perform bitwise operations between strings
##blpop
###### key [key ...] timeout ######
Remove and get the first element in a list, or block until one is available
##brpop
###### key [key ...] timeout ######
Remove and get the last element in a list, or block until one is available
##brpoplpush
###### source destination timeout ######
Pop a value from a list, push it to another list and return it; or block until one is available
##client kill
###### ip:port ######
Kill the connection of a client
##client list
######  ######
Get the list of client connections
##client getname
######  ######
Get the current connection name
##client setname
###### connection-name ######
Set the current connection name
##config get
###### parameter ######
Get the value of a configuration parameter
##config rewrite
######  ######
Rewrite the configuration file with the in memory configuration
##config set
###### parameter value ######
Set a configuration parameter to the given value
##config resetstat
######  ######
Reset the stats returned by INFO
##dbsize
######  ######
Return the number of keys in the selected database
##debug object
###### key ######
Get debugging information about a key
##debug segfault
######  ######
Make the server crash
##decr
###### key ######
Decrement the integer value of a key by one
##decrby
###### key decrement ######
Decrement the integer value of a key by the given number
##del
###### key [key ...] ######
Delete a key
##discard
######  ######
Discard all commands issued after MULTI
##dump
###### key ######
Return a serialized version of the value stored at the specified key.
##echo
###### message ######
Echo the given string
##eval
###### script numkeys key [key ...] arg [arg ...] ######
Execute a Lua script server side
##evalsha
###### sha1 numkeys key [key ...] arg [arg ...] ######
Execute a Lua script server side
##exec
######  ######
Execute all commands issued after MULTI
##exists
###### key ######
Determine if a key exists
##expire
###### key seconds ######
Set a key's time to live in seconds
##expireat
###### key timestamp ######
Set the expiration for a key as a UNIX timestamp
##flushall
######  ######
Remove all keys from all databases
##flushdb
######  ######
Remove all keys from the current database
##get
###### key ######
Get the value of a key
##getbit
###### key offset ######
Returns the bit value at offset in the string value stored at key
##getrange
###### key start end ######
Get a substring of the string stored at a key
##getset
###### key value ######
Set the string value of a key and return its old value
##hdel
###### key field [field ...] ######
Delete one or more hash fields
##hexists
###### key field ######
Determine if a hash field exists
##hget
###### key field ######
Get the value of a hash field
##hgetall
###### key ######
Get all the fields and values in a hash
##hincrby
###### key field increment ######
Increment the integer value of a hash field by the given number
##hincrbyfloat
###### key field increment ######
Increment the float value of a hash field by the given amount
##hkeys
###### key ######
Get all the fields in a hash
##hlen
###### key ######
Get the number of fields in a hash
##hmget
###### key field [field ...] ######
Get the values of all the given hash fields
##hmset
###### key field value [field value ...] ######
Set multiple hash fields to multiple values
##hset
###### key field value ######
Set the string value of a hash field
##hsetnx
###### key field value ######
Set the value of a hash field, only if the field does not exist
##hvals
###### key ######
Get all the values in a hash
##incr
###### key ######
Increment the integer value of a key by one
##incrby
###### key increment ######
Increment the integer value of a key by the given amount
##incrbyfloat
###### key increment ######
Increment the float value of a key by the given amount
##info
###### [section] ######
Get information and statistics about the server
##keys
###### pattern ######
Find all keys matching the given pattern
##lastsave
######  ######
Get the UNIX time stamp of the last successful save to disk
##lindex
###### key index ######
Get an element from a list by its index
##linsert
###### key BEFORE|AFTER pivot value ######
Insert an element before or after another element in a list
##llen
###### key ######
Get the length of a list
##lpop
###### key ######
Remove and get the first element in a list
##lpush
###### key value [value ...] ######
Prepend one or multiple values to a list
##lpushx
###### key value ######
Prepend a value to a list, only if the list exists
##lrange
###### key start stop ######
Get a range of elements from a list
##lrem
###### key count value ######
Remove elements from a list
##lset
###### key index value ######
Set the value of an element in a list by its index
##ltrim
###### key start stop ######
Trim a list to the specified range
##mget
###### key [key ...] ######
Get the values of all the given keys
##migrate
###### host port key destination-db timeout [COPY] [REPLACE] ######
Atomically transfer a key from a Redis instance to another one.
##monitor
######  ######
Listen for all requests received by the server in real time
##move
###### key db ######
Move a key to another database
##mset
###### key value [key value ...] ######
Set multiple keys to multiple values
##msetnx
###### key value [key value ...] ######
Set multiple keys to multiple values, only if none of the keys exist
##multi
######  ######
Mark the start of a transaction block
##object
###### subcommand [arguments [arguments ...]] ######
Inspect the internals of Redis objects
##persist
###### key ######
Remove the expiration from a key
##pexpire
###### key milliseconds ######
Set a key's time to live in milliseconds
##pexpireat
###### key milliseconds-timestamp ######
Set the expiration for a key as a UNIX timestamp specified in milliseconds
##ping
######  ######
Ping the server
##psetex
###### key milliseconds value ######
Set the value and expiration in milliseconds of a key
##psubscribe
###### pattern [pattern ...] ######
Listen for messages published to channels matching the given patterns
##pubsub
###### subcommand [argument [argument ...]] ######
Inspect the state of the Pub/Sub subsystem
##pttl
###### key ######
Get the time to live for a key in milliseconds
##publish
###### channel message ######
Post a message to a channel
##punsubscribe
###### [pattern [pattern ...]] ######
Stop listening for messages posted to channels matching the given patterns
##quit
######  ######
Close the connection
##randomkey
######  ######
Return a random key from the keyspace
##rename
###### key newkey ######
Rename a key
##renamenx
###### key newkey ######
Rename a key, only if the new key does not exist
##restore
###### key ttl serialized-value ######
Create a key using the provided serialized value, previously obtained using DUMP.
##rpop
###### key ######
Remove and get the last element in a list
##rpoplpush
###### source destination ######
Remove the last element in a list, append it to another list and return it
##rpush
###### key value [value ...] ######
Append one or multiple values to a list
##rpushx
###### key value ######
Append a value to a list, only if the list exists
##sadd
###### key member [member ...] ######
Add one or more members to a set
##save
######  ######
Synchronously save the dataset to disk
##scard
###### key ######
Get the number of members in a set
##script exists
###### script [script ...] ######
Check existence of scripts in the script cache.
##script flush
######  ######
Remove all the scripts from the script cache.
##script kill
######  ######
Kill the script currently in execution.
##script load
###### script ######
Load the specified Lua script into the script cache.
##sdiff
###### key [key ...] ######
Subtract multiple sets
##sdiffstore
###### destination key [key ...] ######
Subtract multiple sets and store the resulting set in a key
##select
###### index ######
Change the selected database for the current connection
##set
###### key value [EX seconds] [PX milliseconds] [NX|XX] ######
Set the string value of a key
##setbit
###### key offset value ######
Sets or clears the bit at offset in the string value stored at key
##setex
###### key seconds value ######
Set the value and expiration of a key
##setnx
###### key value ######
Set the value of a key, only if the key does not exist
##setrange
###### key offset value ######
Overwrite part of a string at key starting at the specified offset
##shutdown
###### [NOSAVE] [SAVE] ######
Synchronously save the dataset to disk and then shut down the server
##sinter
###### key [key ...] ######
Intersect multiple sets
##sinterstore
###### destination key [key ...] ######
Intersect multiple sets and store the resulting set in a key
##sismember
###### key member ######
Determine if a given value is a member of a set
##slaveof
###### host port ######
Make the server a slave of another instance, or promote it as master
##slowlog
###### subcommand [argument] ######
Manages the Redis slow queries log
##smembers
###### key ######
Get all the members in a set
##smove
###### source destination member ######
Move a member from one set to another
##sort
###### key [BY pattern] [LIMIT offset count] [GET pattern [GET pattern ...]] [ASC|DESC] [ALPHA] [STORE destination] ######
Sort the elements in a list, set or sorted set
##spop
###### key ######
Remove and return a random member from a set
##srandmember
###### key [count] ######
Get one or multiple random members from a set
##srem
###### key member [member ...] ######
Remove one or more members from a set
##strlen
###### key ######
Get the length of the value stored in a key
##subscribe
###### channel [channel ...] ######
Listen for messages published to the given channels
##sunion
###### key [key ...] ######
Add multiple sets
##sunionstore
###### destination key [key ...] ######
Add multiple sets and store the resulting set in a key
##sync
######  ######
Internal command used for replication
##time
######  ######
Return the current server time
##ttl
###### key ######
Get the time to live for a key
##type
###### key ######
Determine the type stored at key
##unsubscribe
###### [channel [channel ...]] ######
Stop listening for messages posted to the given channels
##unwatch
######  ######
Forget about all watched keys
##watch
###### key [key ...] ######
Watch the given keys to determine execution of the MULTI/EXEC block
##zadd
###### key score member [score member ...] ######
Add one or more members to a sorted set, or update its score if it already exists
##zcard
###### key ######
Get the number of members in a sorted set
##zcount
###### key min max ######
Count the members in a sorted set with scores within the given values
##zincrby
###### key increment member ######
Increment the score of a member in a sorted set
##zinterstore
###### destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] ######
Intersect multiple sorted sets and store the resulting sorted set in a new key
##zrange
###### key start stop [WITHSCORES] ######
Return a range of members in a sorted set, by index
##zrangebyscore
###### key min max [WITHSCORES] [LIMIT offset count] ######
Return a range of members in a sorted set, by score
##zrank
###### key member ######
Determine the index of a member in a sorted set
##zrem
###### key member [member ...] ######
Remove one or more members from a sorted set
##zremrangebyrank
###### key start stop ######
Remove all members in a sorted set within the given indexes
##zremrangebyscore
###### key min max ######
Remove all members in a sorted set within the given scores
##zrevrange
###### key start stop [WITHSCORES] ######
Return a range of members in a sorted set, by index, with scores ordered from high to low
##zrevrangebyscore
###### key max min [WITHSCORES] [LIMIT offset count] ######
Return a range of members in a sorted set, by score, with scores ordered from high to low
##zrevrank
###### key member ######
Determine the index of a member in a sorted set, with scores ordered from high to low
##zscore
###### key member ######
Get the score associated with the given member in a sorted set
##zunionstore
###### destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX] ######
Add multiple sorted sets and store the resulting sorted set in a new key
##scan
###### cursor [MATCH pattern] [COUNT count] ######
Incrementally iterate the keys space
##sscan
###### key cursor [MATCH pattern] [COUNT count] ######
Incrementally iterate Set elements
##hscan
###### key cursor [MATCH pattern] [COUNT count] ######
Incrementally iterate hash fields and associated values
##zscan
###### key cursor [MATCH pattern] [COUNT count] ######
Incrementally iterate sorted sets elements and associated scores

## LICENSE - "MIT License"

Copyright (c) 2014 Mohamed IDRISSI, http://www.mohamedidrissi.com/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
