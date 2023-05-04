const tagify = require('cypress-tags');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const exec = require('child_process').execSync;

module.exports = (on, config) => {
    on('file:preprocessor', tagify(config));
    on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
        //If you are using other than Windows remove below two lines
        //exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
        //exec("IF EXIST cypress\\results rmdir /Q /S cypress\\reports")
    });
    on('after:run', async () => {
        console.log('override after:run');
        //if you are using other than Windows remove below line (having await exec)
        exec("npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml");
        await afterRunHook();
    });
};