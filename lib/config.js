/*
 * Create and export configuration variables
 *
 */

// Container for all the environments
var environments = {};

// Staging (default) environment
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
  hashingSecret: "thisIsSecret",
  maxChecks: 5,
  twilio: {
    accountSid: "AC41e658c4ae994f94bd042f5214a801e1",
    authToken: "9ba793abd4267762195ccc3b3dddd7dd",
    fromPhone: "+17624753863",
  },
};

// Production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production",
  hashingSecret: "thisIsAlsoASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "AC41e658c4ae994f94bd042f5214a801e1",
    authToken: "9ba793abd4267762195ccc3b3dddd7dd",
    fromPhone: "+17624753863",
  },
};

// Determine which environment was passed as a command-line argument
var currentEnvironment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

// Check that the current environment is one of the envirnments above, if not, default to staging
var environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.staging;

// Export the module
module.exports = environmentToExport;
