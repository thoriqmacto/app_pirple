/*
 * Primary file for the API
 *
 */

// Dependencies
var http = require("http");
var url = require("url");
var StringDecoder = require("string_decoder").StringDecoder;
var config = require("./config");

// The server should respond to all request with a string
var server = http.createServer(function (req, res) {
  // Get the URL and parse it
  var parsedUrl = url.parse(req.url, true);
  // console.log(parsedUrl)
  // var reqUrl = new URL(req.url);

  // Get the path
  var path = parsedUrl.pathname;
  // console.log(path)
  // var path = reqUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");
  // console.log(trimmedPath)

  // Get the query string as an Object
  var queryStringObject = parsedUrl.query;

  // Get the HTTP method
  var method = req.method.toLowerCase();

  // Get the headers as an Object
  var headers = req.headers;

  // Get the payload, if any
  var decoder = new StringDecoder("utf-8");
  var buffer = "";
  req.on("data", function (data) {
    buffer += decoder.write(data);
  });

  req.on("end", function () {
    buffer += decoder.end();

    // Choose the handler this request should go to. if one is not found, use the notFound handler
    var chosenHandler =
      typeof router[trimmedPath] !== "undefined"
        ? router[trimmedPath]
        : handlers.notFound;

    // Construct the data objc to send to the handler
    var data = {
      trimmedPath: trimmedPath,
      queryStringObject: queryStringObject,
      method: method,
      headers: headers,
      payload: buffer,
    };

    // Route the request to the handler specified in the router
    chosenHandler(data, function (statusCode, payload) {
      // Use the status code called back by the handler, or default to 200
      statusCode = typeof statusCode == "number" ? statusCode : 200;

      // Use the payload called back by the handler, or default to the empty object
      payload = typeof payload == "object" ? payload : {};

      // Convert the payload to a string
      var payloadString = JSON.stringify(payload);

      // Return the response
      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(payloadString);

      // Log the request path
      console.log("Returning this response: ", statusCode, payloadString);
    });

    // Send the responses
    // res.end('Hello World\n');

    // Log the request path
    // console.log('Request received with these payload: ', buffer)
    // console.log('Request received on path: '+trimmedPath+ ' with method: '+method+ ' and with these query string parameters',queryStringObject);
  });
});

// Start the server, and have it listen on port 3000
server.listen(config.port, function () {
  console.log(
    "The server is listening on port " +
      config.port +
      " in " +
      config.envName +
      " mode"
  );
});

// Define the handlers
var handlers = {};

// Sample handler
handlers.sample = function (data, callback) {
  // Callback a http status code, and a payload Object
  callback(406, { name: "sample handler" });
};

// Not found handler
handlers.notFound = function (data, callback) {
  callback(404);
};

// Define a request router
var router = {
  sample: handlers.sample,
};
