const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const message = Buffer.from("Hello, UDP Server!");

client.send(message, 8081, "127.0.0.1", (error) => {
  if (error) {
    console.error(`Error sending message: ${error}`);
  } else {
    console.log("Message sent to UDP server.");
  }

  // Close the client socket when done.
  client.close();
});
