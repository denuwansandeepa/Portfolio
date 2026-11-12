const net = require("net");

const server = net.createServer((clientSocket) => {
  const targetSocket = net.connect(3000, "127.0.0.1", () => {
    clientSocket.pipe(targetSocket);
    targetSocket.pipe(clientSocket);
  });

  clientSocket.on("error", () => targetSocket.destroy());
  targetSocket.on("error", () => clientSocket.destroy());
});

server.listen(3001, "0.0.0.0", () => {
  console.log("Forwarding port 3001 -> 3000");
});

