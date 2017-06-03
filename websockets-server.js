var websocket = require("ws");
var server = websocket.Server;
var port = 3001;
var ws = new WebSocketServer({port: port});
console.log("WebSocketServer started");
