/*********************************************************
 * Source: http://redis.io/commands
 *
 * Code:
 *   var res = [];
 *   $('.command').each(function(){
 *     var obj = {};
 *     var $par = $(this).parent();
 *
 *     obj.command = $(this).children('a').text();
 *     obj.func = obj.command.toLowerCase();
 *     obj.params = $(this)
 *                   .children('span.args')
 *                   .text()
 *                   .trim()
 *                   .replace(/\n             /g, '');
 *     obj.summary = $par.children('span.summary').text();
 *     obj.group = $par.data('group')
 *     res.push(obj)
 *   });
 *
 *********************************************************/

module.exports = [{
    "command": "APPEND",
    "func": "append",
    "params": "key value",
    "summary": "Append a value to a key",
    "group": "string"
}, {
    "command": "AUTH",
    "func": "auth",
    "params": "password",
    "summary": "Authenticate to the server",
    "group": "connection"
}, {
    "command": "BGREWRITEAOF",
    "func": "bgrewriteaof",
    "params": "",
    "summary": "Asynchronously rewrite the append-only file",
    "group": "server"
}, {
    "command": "BGSAVE",
    "func": "bgsave",
    "params": "",
    "summary": "Asynchronously save the dataset to disk",
    "group": "server"
}, {
    "command": "BITCOUNT",
    "func": "bitcount",
    "params": "key [start] [end]",
    "summary": "Count set bits in a string",
    "group": "string"
}, {
    "command": "BITOP",
    "func": "bitop",
    "params": "operation destkey key [key ...]",
    "summary": "Perform bitwise operations between strings",
    "group": "string"
}, {
    "command": "BLPOP",
    "func": "blpop",
    "params": "key [key ...] timeout",
    "summary": "Remove and get the first element in a list, or block until one is available",
    "group": "list"
}, {
    "command": "BRPOP",
    "func": "brpop",
    "params": "key [key ...] timeout",
    "summary": "Remove and get the last element in a list, or block until one is available",
    "group": "list"
}, {
    "command": "BRPOPLPUSH",
    "func": "brpoplpush",
    "params": "source destination timeout",
    "summary": "Pop a value from a list, push it to another list and return it; or block until one is available",
    "group": "list"
}, {
    "command": "CLIENT KILL",
    "func": "client kill",
    "params": "ip:port",
    "summary": "Kill the connection of a client",
    "group": "server"
}, {
    "command": "CLIENT LIST",
    "func": "client list",
    "params": "",
    "summary": "Get the list of client connections",
    "group": "server"
}, {
    "command": "CLIENT GETNAME",
    "func": "client getname",
    "params": "",
    "summary": "Get the current connection name",
    "group": "server"
}, {
    "command": "CLIENT SETNAME",
    "func": "client setname",
    "params": "connection-name",
    "summary": "Set the current connection name",
    "group": "server"
}, {
    "command": "CONFIG GET",
    "func": "config get",
    "params": "parameter",
    "summary": "Get the value of a configuration parameter",
    "group": "server"
}, {
    "command": "CONFIG REWRITE",
    "func": "config rewrite",
    "params": "",
    "summary": "Rewrite the configuration file with the in memory configuration",
    "group": "server"
}, {
    "command": "CONFIG SET",
    "func": "config set",
    "params": "parameter value",
    "summary": "Set a configuration parameter to the given value",
    "group": "server"
}, {
    "command": "CONFIG RESETSTAT",
    "func": "config resetstat",
    "params": "",
    "summary": "Reset the stats returned by INFO",
    "group": "server"
}, {
    "command": "DBSIZE",
    "func": "dbsize",
    "params": "",
    "summary": "Return the number of keys in the selected database",
    "group": "server"
}, {
    "command": "DEBUG OBJECT",
    "func": "debug object",
    "params": "key",
    "summary": "Get debugging information about a key",
    "group": "server"
}, {
    "command": "DEBUG SEGFAULT",
    "func": "debug segfault",
    "params": "",
    "summary": "Make the server crash",
    "group": "server"
}, {
    "command": "DECR",
    "func": "decr",
    "params": "key",
    "summary": "Decrement the integer value of a key by one",
    "group": "string"
}, {
    "command": "DECRBY",
    "func": "decrby",
    "params": "key decrement",
    "summary": "Decrement the integer value of a key by the given number",
    "group": "string"
}, {
    "command": "DEL",
    "func": "del",
    "params": "key [key ...]",
    "summary": "Delete a key",
    "group": "generic"
}, {
    "command": "DISCARD",
    "func": "discard",
    "params": "",
    "summary": "Discard all commands issued after MULTI",
    "group": "transactions"
}, {
    "command": "DUMP",
    "func": "dump",
    "params": "key",
    "summary": "Return a serialized version of the value stored at the specified key.",
    "group": "generic"
}, {
    "command": "ECHO",
    "func": "echo",
    "params": "message",
    "summary": "Echo the given string",
    "group": "connection"
}, {
    "command": "EVAL",
    "func": "eval",
    "params": "script numkeys key [key ...] arg [arg ...]",
    "summary": "Execute a Lua script server side",
    "group": "scripting"
}, {
    "command": "EVALSHA",
    "func": "evalsha",
    "params": "sha1 numkeys key [key ...] arg [arg ...]",
    "summary": "Execute a Lua script server side",
    "group": "scripting"
}, {
    "command": "EXEC",
    "func": "exec",
    "params": "",
    "summary": "Execute all commands issued after MULTI",
    "group": "transactions"
}, {
    "command": "EXISTS",
    "func": "exists",
    "params": "key",
    "summary": "Determine if a key exists",
    "group": "generic"
}, {
    "command": "EXPIRE",
    "func": "expire",
    "params": "key seconds",
    "summary": "Set a key's time to live in seconds",
    "group": "generic"
}, {
    "command": "EXPIREAT",
    "func": "expireat",
    "params": "key timestamp",
    "summary": "Set the expiration for a key as a UNIX timestamp",
    "group": "generic"
}, {
    "command": "FLUSHALL",
    "func": "flushall",
    "params": "",
    "summary": "Remove all keys from all databases",
    "group": "server"
}, {
    "command": "FLUSHDB",
    "func": "flushdb",
    "params": "",
    "summary": "Remove all keys from the current database",
    "group": "server"
}, {
    "command": "GET",
    "func": "get",
    "params": "key",
    "summary": "Get the value of a key",
    "group": "string"
}, {
    "command": "GETBIT",
    "func": "getbit",
    "params": "key offset",
    "summary": "Returns the bit value at offset in the string value stored at key",
    "group": "string"
}, {
    "command": "GETRANGE",
    "func": "getrange",
    "params": "key start end",
    "summary": "Get a substring of the string stored at a key",
    "group": "string"
}, {
    "command": "GETSET",
    "func": "getset",
    "params": "key value",
    "summary": "Set the string value of a key and return its old value",
    "group": "string"
}, {
    "command": "HDEL",
    "func": "hdel",
    "params": "key field [field ...]",
    "summary": "Delete one or more hash fields",
    "group": "hash"
}, {
    "command": "HEXISTS",
    "func": "hexists",
    "params": "key field",
    "summary": "Determine if a hash field exists",
    "group": "hash"
}, {
    "command": "HGET",
    "func": "hget",
    "params": "key field",
    "summary": "Get the value of a hash field",
    "group": "hash"
}, {
    "command": "HGETALL",
    "func": "hgetall",
    "params": "key",
    "summary": "Get all the fields and values in a hash",
    "group": "hash"
}, {
    "command": "HINCRBY",
    "func": "hincrby",
    "params": "key field increment",
    "summary": "Increment the integer value of a hash field by the given number",
    "group": "hash"
}, {
    "command": "HINCRBYFLOAT",
    "func": "hincrbyfloat",
    "params": "key field increment",
    "summary": "Increment the float value of a hash field by the given amount",
    "group": "hash"
}, {
    "command": "HKEYS",
    "func": "hkeys",
    "params": "key",
    "summary": "Get all the fields in a hash",
    "group": "hash"
}, {
    "command": "HLEN",
    "func": "hlen",
    "params": "key",
    "summary": "Get the number of fields in a hash",
    "group": "hash"
}, {
    "command": "HMGET",
    "func": "hmget",
    "params": "key field [field ...]",
    "summary": "Get the values of all the given hash fields",
    "group": "hash"
}, {
    "command": "HMSET",
    "func": "hmset",
    "params": "key field value [field value ...]",
    "summary": "Set multiple hash fields to multiple values",
    "group": "hash"
}, {
    "command": "HSET",
    "func": "hset",
    "params": "key field value",
    "summary": "Set the string value of a hash field",
    "group": "hash"
}, {
    "command": "HSETNX",
    "func": "hsetnx",
    "params": "key field value",
    "summary": "Set the value of a hash field, only if the field does not exist",
    "group": "hash"
}, {
    "command": "HVALS",
    "func": "hvals",
    "params": "key",
    "summary": "Get all the values in a hash",
    "group": "hash"
}, {
    "command": "INCR",
    "func": "incr",
    "params": "key",
    "summary": "Increment the integer value of a key by one",
    "group": "string"
}, {
    "command": "INCRBY",
    "func": "incrby",
    "params": "key increment",
    "summary": "Increment the integer value of a key by the given amount",
    "group": "string"
}, {
    "command": "INCRBYFLOAT",
    "func": "incrbyfloat",
    "params": "key increment",
    "summary": "Increment the float value of a key by the given amount",
    "group": "string"
}, {
    "command": "INFO",
    "func": "info",
    "params": "[section]",
    "summary": "Get information and statistics about the server",
    "group": "server"
}, {
    "command": "KEYS",
    "func": "keys",
    "params": "pattern",
    "summary": "Find all keys matching the given pattern",
    "group": "generic"
}, {
    "command": "LASTSAVE",
    "func": "lastsave",
    "params": "",
    "summary": "Get the UNIX time stamp of the last successful save to disk",
    "group": "server"
}, {
    "command": "LINDEX",
    "func": "lindex",
    "params": "key index",
    "summary": "Get an element from a list by its index",
    "group": "list"
}, {
    "command": "LINSERT",
    "func": "linsert",
    "params": "key BEFORE|AFTER pivot value",
    "summary": "Insert an element before or after another element in a list",
    "group": "list"
}, {
    "command": "LLEN",
    "func": "llen",
    "params": "key",
    "summary": "Get the length of a list",
    "group": "list"
}, {
    "command": "LPOP",
    "func": "lpop",
    "params": "key",
    "summary": "Remove and get the first element in a list",
    "group": "list"
}, {
    "command": "LPUSH",
    "func": "lpush",
    "params": "key value [value ...]",
    "summary": "Prepend one or multiple values to a list",
    "group": "list"
}, {
    "command": "LPUSHX",
    "func": "lpushx",
    "params": "key value",
    "summary": "Prepend a value to a list, only if the list exists",
    "group": "list"
}, {
    "command": "LRANGE",
    "func": "lrange",
    "params": "key start stop",
    "summary": "Get a range of elements from a list",
    "group": "list"
}, {
    "command": "LREM",
    "func": "lrem",
    "params": "key count value",
    "summary": "Remove elements from a list",
    "group": "list"
}, {
    "command": "LSET",
    "func": "lset",
    "params": "key index value",
    "summary": "Set the value of an element in a list by its index",
    "group": "list"
}, {
    "command": "LTRIM",
    "func": "ltrim",
    "params": "key start stop",
    "summary": "Trim a list to the specified range",
    "group": "list"
}, {
    "command": "MGET",
    "func": "mget",
    "params": "key [key ...]",
    "summary": "Get the values of all the given keys",
    "group": "string"
}, {
    "command": "MIGRATE",
    "func": "migrate",
    "params": "host port key destination-db timeout [COPY] [REPLACE]",
    "summary": "Atomically transfer a key from a Redis instance to another one.",
    "group": "generic"
}, {
    "command": "MONITOR",
    "func": "monitor",
    "params": "",
    "summary": "Listen for all requests received by the server in real time",
    "group": "server"
}, {
    "command": "MOVE",
    "func": "move",
    "params": "key db",
    "summary": "Move a key to another database",
    "group": "generic"
}, {
    "command": "MSET",
    "func": "mset",
    "params": "key value [key value ...]",
    "summary": "Set multiple keys to multiple values",
    "group": "string"
}, {
    "command": "MSETNX",
    "func": "msetnx",
    "params": "key value [key value ...]",
    "summary": "Set multiple keys to multiple values, only if none of the keys exist",
    "group": "string"
}, {
    "command": "MULTI",
    "func": "multi",
    "params": "",
    "summary": "Mark the start of a transaction block",
    "group": "transactions"
}, {
    "command": "OBJECT",
    "func": "object",
    "params": "subcommand [arguments [arguments ...]]",
    "summary": "Inspect the internals of Redis objects",
    "group": "generic"
}, {
    "command": "PERSIST",
    "func": "persist",
    "params": "key",
    "summary": "Remove the expiration from a key",
    "group": "generic"
}, {
    "command": "PEXPIRE",
    "func": "pexpire",
    "params": "key milliseconds",
    "summary": "Set a key's time to live in milliseconds",
    "group": "generic"
}, {
    "command": "PEXPIREAT",
    "func": "pexpireat",
    "params": "key milliseconds-timestamp",
    "summary": "Set the expiration for a key as a UNIX timestamp specified in milliseconds",
    "group": "generic"
}, {
    "command": "PING",
    "func": "ping",
    "params": "",
    "summary": "Ping the server",
    "group": "connection"
}, {
    "command": "PSETEX",
    "func": "psetex",
    "params": "key milliseconds value",
    "summary": "Set the value and expiration in milliseconds of a key",
    "group": "string"
}, {
    "command": "PSUBSCRIBE",
    "func": "psubscribe",
    "params": "pattern [pattern ...]",
    "summary": "Listen for messages published to channels matching the given patterns",
    "group": "pubsub"
}, {
    "command": "PUBSUB",
    "func": "pubsub",
    "params": "subcommand [argument [argument ...]]",
    "summary": "Inspect the state of the Pub/Sub subsystem",
    "group": "pubsub"
}, {
    "command": "PTTL",
    "func": "pttl",
    "params": "key",
    "summary": "Get the time to live for a key in milliseconds",
    "group": "generic"
}, {
    "command": "PUBLISH",
    "func": "publish",
    "params": "channel message",
    "summary": "Post a message to a channel",
    "group": "pubsub"
}, {
    "command": "PUNSUBSCRIBE",
    "func": "punsubscribe",
    "params": "[pattern [pattern ...]]",
    "summary": "Stop listening for messages posted to channels matching the given patterns",
    "group": "pubsub"
}, {
    "command": "QUIT",
    "func": "quit",
    "params": "",
    "summary": "Close the connection",
    "group": "connection"
}, {
    "command": "RANDOMKEY",
    "func": "randomkey",
    "params": "",
    "summary": "Return a random key from the keyspace",
    "group": "generic"
}, {
    "command": "RENAME",
    "func": "rename",
    "params": "key newkey",
    "summary": "Rename a key",
    "group": "generic"
}, {
    "command": "RENAMENX",
    "func": "renamenx",
    "params": "key newkey",
    "summary": "Rename a key, only if the new key does not exist",
    "group": "generic"
}, {
    "command": "RESTORE",
    "func": "restore",
    "params": "key ttl serialized-value",
    "summary": "Create a key using the provided serialized value, previously obtained using DUMP.",
    "group": "generic"
}, {
    "command": "RPOP",
    "func": "rpop",
    "params": "key",
    "summary": "Remove and get the last element in a list",
    "group": "list"
}, {
    "command": "RPOPLPUSH",
    "func": "rpoplpush",
    "params": "source destination",
    "summary": "Remove the last element in a list, append it to another list and return it",
    "group": "list"
}, {
    "command": "RPUSH",
    "func": "rpush",
    "params": "key value [value ...]",
    "summary": "Append one or multiple values to a list",
    "group": "list"
}, {
    "command": "RPUSHX",
    "func": "rpushx",
    "params": "key value",
    "summary": "Append a value to a list, only if the list exists",
    "group": "list"
}, {
    "command": "SADD",
    "func": "sadd",
    "params": "key member [member ...]",
    "summary": "Add one or more members to a set",
    "group": "set"
}, {
    "command": "SAVE",
    "func": "save",
    "params": "",
    "summary": "Synchronously save the dataset to disk",
    "group": "server"
}, {
    "command": "SCARD",
    "func": "scard",
    "params": "key",
    "summary": "Get the number of members in a set",
    "group": "set"
}, {
    "command": "SCRIPT EXISTS",
    "func": "script exists",
    "params": "script [script ...]",
    "summary": "Check existence of scripts in the script cache.",
    "group": "scripting"
}, {
    "command": "SCRIPT FLUSH",
    "func": "script flush",
    "params": "",
    "summary": "Remove all the scripts from the script cache.",
    "group": "scripting"
}, {
    "command": "SCRIPT KILL",
    "func": "script kill",
    "params": "",
    "summary": "Kill the script currently in execution.",
    "group": "scripting"
}, {
    "command": "SCRIPT LOAD",
    "func": "script load",
    "params": "script",
    "summary": "Load the specified Lua script into the script cache.",
    "group": "scripting"
}, {
    "command": "SDIFF",
    "func": "sdiff",
    "params": "key [key ...]",
    "summary": "Subtract multiple sets",
    "group": "set"
}, {
    "command": "SDIFFSTORE",
    "func": "sdiffstore",
    "params": "destination key [key ...]",
    "summary": "Subtract multiple sets and store the resulting set in a key",
    "group": "set"
}, {
    "command": "SELECT",
    "func": "select",
    "params": "index",
    "summary": "Change the selected database for the current connection",
    "group": "connection"
}, {
    "command": "SET",
    "func": "set",
    "params": "key value [EX seconds] [PX milliseconds] [NX|XX]",
    "summary": "Set the string value of a key",
    "group": "string"
}, {
    "command": "SETBIT",
    "func": "setbit",
    "params": "key offset value",
    "summary": "Sets or clears the bit at offset in the string value stored at key",
    "group": "string"
}, {
    "command": "SETEX",
    "func": "setex",
    "params": "key seconds value",
    "summary": "Set the value and expiration of a key",
    "group": "string"
}, {
    "command": "SETNX",
    "func": "setnx",
    "params": "key value",
    "summary": "Set the value of a key, only if the key does not exist",
    "group": "string"
}, {
    "command": "SETRANGE",
    "func": "setrange",
    "params": "key offset value",
    "summary": "Overwrite part of a string at key starting at the specified offset",
    "group": "string"
}, {
    "command": "SHUTDOWN",
    "func": "shutdown",
    "params": "[NOSAVE] [SAVE]",
    "summary": "Synchronously save the dataset to disk and then shut down the server",
    "group": "server"
}, {
    "command": "SINTER",
    "func": "sinter",
    "params": "key [key ...]",
    "summary": "Intersect multiple sets",
    "group": "set"
}, {
    "command": "SINTERSTORE",
    "func": "sinterstore",
    "params": "destination key [key ...]",
    "summary": "Intersect multiple sets and store the resulting set in a key",
    "group": "set"
}, {
    "command": "SISMEMBER",
    "func": "sismember",
    "params": "key member",
    "summary": "Determine if a given value is a member of a set",
    "group": "set"
}, {
    "command": "SLAVEOF",
    "func": "slaveof",
    "params": "host port",
    "summary": "Make the server a slave of another instance, or promote it as master",
    "group": "server"
}, {
    "command": "SLOWLOG",
    "func": "slowlog",
    "params": "subcommand [argument]",
    "summary": "Manages the Redis slow queries log",
    "group": "server"
}, {
    "command": "SMEMBERS",
    "func": "smembers",
    "params": "key",
    "summary": "Get all the members in a set",
    "group": "set"
}, {
    "command": "SMOVE",
    "func": "smove",
    "params": "source destination member",
    "summary": "Move a member from one set to another",
    "group": "set"
}, {
    "command": "SORT",
    "func": "sort",
    "params": "key [BY pattern] [LIMIT offset count] [GET pattern [GET pattern ...]] [ASC|DESC] [ALPHA] [STORE destination]",
    "summary": "Sort the elements in a list, set or sorted set",
    "group": "generic"
}, {
    "command": "SPOP",
    "func": "spop",
    "params": "key",
    "summary": "Remove and return a random member from a set",
    "group": "set"
}, {
    "command": "SRANDMEMBER",
    "func": "srandmember",
    "params": "key [count]",
    "summary": "Get one or multiple random members from a set",
    "group": "set"
}, {
    "command": "SREM",
    "func": "srem",
    "params": "key member [member ...]",
    "summary": "Remove one or more members from a set",
    "group": "set"
}, {
    "command": "STRLEN",
    "func": "strlen",
    "params": "key",
    "summary": "Get the length of the value stored in a key",
    "group": "string"
}, {
    "command": "SUBSCRIBE",
    "func": "subscribe",
    "params": "channel [channel ...]",
    "summary": "Listen for messages published to the given channels",
    "group": "pubsub"
}, {
    "command": "SUNION",
    "func": "sunion",
    "params": "key [key ...]",
    "summary": "Add multiple sets",
    "group": "set"
}, {
    "command": "SUNIONSTORE",
    "func": "sunionstore",
    "params": "destination key [key ...]",
    "summary": "Add multiple sets and store the resulting set in a key",
    "group": "set"
}, {
    "command": "SYNC",
    "func": "sync",
    "params": "",
    "summary": "Internal command used for replication",
    "group": "server"
}, {
    "command": "TIME",
    "func": "time",
    "params": "",
    "summary": "Return the current server time",
    "group": "server"
}, {
    "command": "TTL",
    "func": "ttl",
    "params": "key",
    "summary": "Get the time to live for a key",
    "group": "generic"
}, {
    "command": "TYPE",
    "func": "type",
    "params": "key",
    "summary": "Determine the type stored at key",
    "group": "generic"
}, {
    "command": "UNSUBSCRIBE",
    "func": "unsubscribe",
    "params": "[channel [channel ...]]",
    "summary": "Stop listening for messages posted to the given channels",
    "group": "pubsub"
}, {
    "command": "UNWATCH",
    "func": "unwatch",
    "params": "",
    "summary": "Forget about all watched keys",
    "group": "transactions"
}, {
    "command": "WATCH",
    "func": "watch",
    "params": "key [key ...]",
    "summary": "Watch the given keys to determine execution of the MULTI/EXEC block",
    "group": "transactions"
}, {
    "command": "ZADD",
    "func": "zadd",
    "params": "key score member [score member ...]",
    "summary": "Add one or more members to a sorted set, or update its score if it already exists",
    "group": "sorted_set"
}, {
    "command": "ZCARD",
    "func": "zcard",
    "params": "key",
    "summary": "Get the number of members in a sorted set",
    "group": "sorted_set"
}, {
    "command": "ZCOUNT",
    "func": "zcount",
    "params": "key min max",
    "summary": "Count the members in a sorted set with scores within the given values",
    "group": "sorted_set"
}, {
    "command": "ZINCRBY",
    "func": "zincrby",
    "params": "key increment member",
    "summary": "Increment the score of a member in a sorted set",
    "group": "sorted_set"
}, {
    "command": "ZINTERSTORE",
    "func": "zinterstore",
    "params": "destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]",
    "summary": "Intersect multiple sorted sets and store the resulting sorted set in a new key",
    "group": "sorted_set"
}, {
    "command": "ZRANGE",
    "func": "zrange",
    "params": "key start stop [WITHSCORES]",
    "summary": "Return a range of members in a sorted set, by index",
    "group": "sorted_set"
}, {
    "command": "ZRANGEBYSCORE",
    "func": "zrangebyscore",
    "params": "key min max [WITHSCORES] [LIMIT offset count]",
    "summary": "Return a range of members in a sorted set, by score",
    "group": "sorted_set"
}, {
    "command": "ZRANK",
    "func": "zrank",
    "params": "key member",
    "summary": "Determine the index of a member in a sorted set",
    "group": "sorted_set"
}, {
    "command": "ZREM",
    "func": "zrem",
    "params": "key member [member ...]",
    "summary": "Remove one or more members from a sorted set",
    "group": "sorted_set"
}, {
    "command": "ZREMRANGEBYRANK",
    "func": "zremrangebyrank",
    "params": "key start stop",
    "summary": "Remove all members in a sorted set within the given indexes",
    "group": "sorted_set"
}, {
    "command": "ZREMRANGEBYSCORE",
    "func": "zremrangebyscore",
    "params": "key min max",
    "summary": "Remove all members in a sorted set within the given scores",
    "group": "sorted_set"
}, {
    "command": "ZREVRANGE",
    "func": "zrevrange",
    "params": "key start stop [WITHSCORES]",
    "summary": "Return a range of members in a sorted set, by index, with scores ordered from high to low",
    "group": "sorted_set"
}, {
    "command": "ZREVRANGEBYSCORE",
    "func": "zrevrangebyscore",
    "params": "key max min [WITHSCORES] [LIMIT offset count]",
    "summary": "Return a range of members in a sorted set, by score, with scores ordered from high to low",
    "group": "sorted_set"
}, {
    "command": "ZREVRANK",
    "func": "zrevrank",
    "params": "key member",
    "summary": "Determine the index of a member in a sorted set, with scores ordered from high to low",
    "group": "sorted_set"
}, {
    "command": "ZSCORE",
    "func": "zscore",
    "params": "key member",
    "summary": "Get the score associated with the given member in a sorted set",
    "group": "sorted_set"
}, {
    "command": "ZUNIONSTORE",
    "func": "zunionstore",
    "params": "destination numkeys key [key ...] [WEIGHTS weight [weight ...]] [AGGREGATE SUM|MIN|MAX]",
    "summary": "Add multiple sorted sets and store the resulting sorted set in a new key",
    "group": "sorted_set"
}, {
    "command": "SCAN",
    "func": "scan",
    "params": "cursor [MATCH pattern] [COUNT count]",
    "summary": "Incrementally iterate the keys space",
    "group": "generic"
}, {
    "command": "SSCAN",
    "func": "sscan",
    "params": "key cursor [MATCH pattern] [COUNT count]",
    "summary": "Incrementally iterate Set elements",
    "group": "set"
}, {
    "command": "HSCAN",
    "func": "hscan",
    "params": "key cursor [MATCH pattern] [COUNT count]",
    "summary": "Incrementally iterate hash fields and associated values",
    "group": "hash"
}, {
    "command": "ZSCAN",
    "func": "zscan",
    "params": "key cursor [MATCH pattern] [COUNT count]",
    "summary": "Incrementally iterate sorted sets elements and associated scores",
    "group": "sorted_set"
}];