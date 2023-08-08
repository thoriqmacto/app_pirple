/*
 * Example TCP (Net) Client
 * Connects to port 6000 and send the word "ping" to server
 *
 */

// Dependencies
var net = require("net");

// Define the message to send
var outbondMessage = "ping";

// Create the client
var client = net.createConnection({ port: 6000 }, function () {
  // Send the message
  client.write(outbondMessage);
});

// When the server writes back, log what it says then kill the connection
client.on("data", function (inboundMessage) {
  var messageString = inboundMessage.toString();
  console.log("I wrote " + outbondMessage + " and they said " + messageString);
  client.end();
});
