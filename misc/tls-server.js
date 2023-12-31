/*
 * Example TLS Server
 * Listens to port 6000 and sends the word "pong" to client
 *
 */

// Dependencies
var tls = require("tls");
var fs = require("fs");
var path = require("path");

// Server options
var options = {
  key: fs.readFileSync(path.join(__dirname, "/../https/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "/../https/cert.pem")),
};

// Create the server
var server = tls.createServer(options, function (connection) {
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
