/*
 * Example REPL server
 * Take the word "fizz" and log out "buzz"
 *
 */

// Dependencies
var repl = require("repl");

// Start the REPL
repl.start({
  prompt: ">",
  eval: function (str) {
    // Evaluation function for incoming inputs
    console.log("At the evaluation stage: ", str);

    // If the user said "fizz", say "buzz" back so then
    if (str.indexOf("fizz") > -1) {
      console.log("buzz");
    }
  },
});
