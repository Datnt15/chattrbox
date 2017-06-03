var websocket = require("ws");
var server = websocket.Server;
var port = 3001;
var ws = new server({port: port});
console.log("server started");
var messages = [];
ws.on("connection", function(socket){
  console.log("Ket noi da duoc thiet lap");

  messages.forEach(function(msg){
    socket.send(msg);
  });

  socket.on("message", function(data){
    console.log("Tin nhan ve: " + data);
    messages.push(data);
    ws.clients.forEach(function(clientSocket){
      clientSocket.send(data);
    });
  });
});
