# PTH-QA-API-Automation
API Automation for QA for PTH Products

Steps to get it setup and running:

1. open terminal and install npm packages: npm i
2. create cypress.env.json in the root directory and fill it with the following:
{
    "lane": "test",
    "baseUrl": "https://fakerestapi.azurewebsites.net/api/v1/",
    
    "username": "[username]",
    "password": "[password]",

    "idToken":  "",
    "clientId": "id",
    "clientPwd": "password1"
}

3. run: npm install cypress
4. run: npx cypress install  (in your c:\users\[username]\appData\local\cypress directory there are binaries for each cypress version.  If you get a new version of cypress, it won't work until binaries are updated, and npm install cypress doesn't do this for you anymore.)
5. To test individual tests, start the cypress test runner: npx cypress open 
6. To run all of the tests: npx run RunAllTest