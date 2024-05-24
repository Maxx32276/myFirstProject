const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //video: true,
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
