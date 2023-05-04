import "cypress-shadow-dom"; // Added by MJ to troubleshoot cypress error.

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/login");
  cy.get('[data-test-id="username"]').type(username);
  cy.get('[data-test-id="password"]').type(password, { log: false });
  cy.get('[data-test-id="sign-in-button"]').click();
});

Cypress.Commands.add("urlLogin", (url, username, password) => {
    cy.visit(`${url}`);
    cy.get('#okta-signin-username').type(username)
    cy.wait(1000)
    cy.get('#okta-signin-submit').click()
    cy.wait(1000)
    cy.get('input[name="password"]').type(password, { log: false })
    cy.wait(1000)
    cy.get('input[value="Verify"]').click()
    cy.wait(1000)
});

Cypress.Commands.add("urlLoginOld", (url, username, password) => {
    cy.visit(`${url}`);
    cy.get('input[id="okta-signin-username"]').type(Cypress.env('username'));
    cy.get('input[id="okta-signin-submit"]').click();
    cy.get('input[name="password"]').type(Cypress.env('password'), { log: false });
    cy.get('input[value="Verify"]').click();
  });
  
Cypress.Commands.add("proxyUser", (id) => {
  cy.get('input[placeholder="CMIS ID"]').type(id);
  cy.get('button').contains('Find').click();
});

Cypress.Commands.add("verifyApiCall", (intercept, statusCode) => {
  cy.wait(intercept).then((interception) => {
    assert.equal(interception.response.statusCode, statusCode);
  });
});

Cypress.Commands.add("interceptGetCall", (url) => {
  cy.intercept({
    method: "GET",
    url: url
  });
});

Cypress.Commands.add("interceptGetCallAs", (url, alias) => {
  cy.intercept({
    method: "GET",
    url: url
  }).as(alias);
});

Cypress.Commands.add("interceptPostCallAs", (url, alias) => {
  cy.intercept({
    method: "POST",
    url: url
  }).as(alias);
});