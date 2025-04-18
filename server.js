const express = require("express");
const path = require("path");

const port = 5000;

const app = express();
const server = require("https").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname + "/public")));
io.attach(server);
io.on("connection", function (socket) {
  socket.on("newuser", function (username) {
    socket.broadcast.emit("newupdate", username + " joined the conversation");
  });
  socket.on("exituser", function (username) {
    socket.broadcast.emit("update", username + " left the conversation");
  });
  socket.on("chat", function (message) {
    socket.broadcast.emit("chat", message);
  });
});

server.listen(port, (err) => {
  console.log(`server running port in ${port}`);
});
