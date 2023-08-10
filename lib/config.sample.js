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
    accountSid: "[YOUR_TWILIO_ACC_ID]",
    authToken: "[YOUR_TWILIO_AUTH_TOKEN]",
    fromPhone: "[YOUR_TWILIO_FROM_PHONE]",
  },
  templateGlobals: {
    appName: "UptimeChecker",
    companyName: "Roketboy, Inc.",
    yearCreated: "2023",
    baseUrl: "http://localhost:3000/",
  },
};

// Testing environment
environments.testing = {
  httpPort: 4000,
  httpsPort: 4001,
  envName: "testing",
  hashingSecret: "thisIsSecret",
  maxChecks: 5,
  twilio: {
    accountSid: "[YOUR_TWILIO_ACC_ID]",
    authToken: "[YOUR_TWILIO_AUTH_TOKEN]",
    fromPhone: "[YOUR_TWILIO_FROM_PHONE]",
  },
  templateGlobals: {
    appName: "UptimeChecker",
    companyName: "Roketboy, Inc.",
    yearCreated: "2023",
    baseUrl: "http://localhost:3000/",
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
    accountSid: "[YOUR_TWILIO_ACC_ID]",
    authToken: "[YOUR_TWILIO_AUTH_TOKEN]",
    fromPhone: "[YOUR_TWILIO_FROM_PHONE]",
  },
  templateGlobals: {
    appName: "UptimeChecker",
    companyName: "Roketboy, Inc.",
    yearCreated: "2023",
    baseUrl: "http://localhost:3000/",
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
