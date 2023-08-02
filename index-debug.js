/*
 * Primary file for the API
 *
 */

// Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");
var exampleDebuggingProblem = require("./lib/exampleDebuggingProblem");
const { debug } = require("console");

// Declare the app
var app = {};

// init function
app.init = function () {
  // Start the server
  debugger;
  server.init();
  debugger;

  // Start the workers
  // workers.init();

  // Start the CLI, but make sure it starts last
  debugger;
  setTimeout(function () {
    cli.init();
    debugger;
  }, 50);
  debugger;

  // Start an example script that has issues (throws an error)
  debugger;
  // Set foo at 1
  var foo = 1;
  console.log("Just assigned 1 to foo");
  debugger;

  // Increment foo
  foo++;
  console.log("Just incremented foo");
  debugger;

  // Square foo
  foo = foo * foo;
  console.log("Just multiplied foo by itself");
  debugger;

  // Convert foo to a string
  foo = foo.toString();
  console.log("Just changed foo to a string");
  debugger;

  // Call the init script that will throw
  exampleDebuggingProblem.init();
  console.log("Just called the library");
  debugger;
};

// Execute
app.init();

// Export the app to outside world
module.exports = app;
