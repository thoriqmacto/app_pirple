/*
 * Example TCP (Net) Server
 * Listens to port 6000 and sends the word "pong" to client
 *
 */

// Dependencies
var net = require("net");

// Create the server
var server = net.createServer(function (connection) {
  // Send the word "pong"
  var outbondMessage = "pong";
  connection.write(outbondMessage);

  // When the client writes something, log it out
  connection.on("data", function (inboundMessage) {
    var messageString = inboundMessage.toString();
    console.log(
      "I wrote " + outbondMessage + " and they said " + messageString
    );
  });
});

// Listen
server.listen(6000);
