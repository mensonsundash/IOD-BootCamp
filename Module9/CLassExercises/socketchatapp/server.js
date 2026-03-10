const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io"); // instance of socket.io

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
//   io.emit("connection", "a user connected");

// print out chat message event
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    //broadcasting 
    io.emit("chat message", msg);
  });

});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
