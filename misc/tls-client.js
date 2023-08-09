/*
 * Example TLS Client
 * Connects to port 6000 and send the word "ping" to server
 *
 */

// Dependencies
var tls = require("tls");
var fs = require("fs");
var path = require("path");

// Server options
var options = {
  ca: fs.readFileSync(path.join(__dirname, "/../https/cert.pem")),
};

// Define the message to send
var outbondMessage = "ping";

// Create the client
var client = tls.connect(6000, options, function () {
  // Send the message
  client.write(outbondMessage);
});

// When the server writes back, log what it says then kill the connection
client.on("data", function (inboundMessage) {
  var messageString = inboundMessage.toString();
  console.log("I wrote " + outbondMessage + " and they said " + messageString);
  client.end();
});
