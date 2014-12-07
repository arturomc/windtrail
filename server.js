var express = require('express');
var server  = express();
var conf    = require("./server/conf");

var host    = conf.server.host.dev;
var port    = conf.server.port.dev;

server.use('/', express.static(__dirname+"/public/"));

server.listen(port, host, function(){
    console.log("Awesome stuff happening on " + host+":"+port);
});