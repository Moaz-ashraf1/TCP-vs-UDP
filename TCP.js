const net = require("net");

const server = net.createServer((socket) => {
  // Send "Hello." immediately upon connection
  socket.write("Hello.");

  // Listen for data from the client
  socket.on("data", (data) => {
    console.log(data.toString());
  });
});

server.listen(8000);
