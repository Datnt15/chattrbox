var http = require('http');
var fs = require("fs");
var extract = require('./extract');
var wss = require('./websockets-server');

var handle_error = function(err, res){
  res.writeHead(404);
  res.end();
}

var server = http.createServer(function(req, res){

  var filePath = extract(req.url);
  fs.readFile(filePath, function(err, data){
    if(err){
      handle_error(err, res);
      return;
    }else{
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(3000);
