require('dotenv').config();

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    email: process.env.CONDUIT_EMAIL,
    password: process.env.CONDUIT_PASSWORD
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //testIsolation: false,
    //defaultCommandTimeout: 5000
    //screenshotOnRunFailure: false

    // cypress/support/index.js
    

  },
});
