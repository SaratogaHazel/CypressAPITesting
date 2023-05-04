const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries: {
    runMode: 3,
    openMode: 2,
  },
  taskTimeout: 120000,
  CYPRESS_CRASH_REPORTS: 0,
  reporter: "cypress-multi-reporters",  
  reporterOptions: {  
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    cypressMochawesomeReporterReporterOptions: {  
      reportDir: "cypress/reports",  
      charts: true,  
      reportPageTitle: "My Test Suite",  
      embeddedScreenshots: true,  
      inlineAssets: true  
    },  
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml",
      testCaseSwitchClassnameAndName: true
    }  
  },
  envLane: 'test',
  projectId: 'ke4o8j',
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
