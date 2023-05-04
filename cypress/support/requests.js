export class Requests {
    make_request(reqUrl, reqMethod, authorization, queryParams, reqBody) {
        let accessToken = Cypress.env('idToken');
        cy.log(authorization);
        cy.log(`access token: ${accessToken}`);
        cy.log(reqMethod);
        cy.log(reqUrl);

        cy
            .request({
                method: reqMethod,
                url: reqUrl,
                headers: {
                    'Authorization': 'Bearer ' + authorization,
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                }
                //qs: queryParams
                // set body here

            })
            .then((Response) => {
                let body = JSON.parse(JSON.stringify(Response.body));
                //Cypress.env({ reqResponse: response });
                //Cypress.env({ reqBody: response.body });
                //cy.log('Response body: ' + body);
                return body;
                //cy.log("Set idToken to: " + Cypress.env("idToken"));
                //cy.log(Cypress.env('idToken'));
                //cy.log("Set env idToken to: " + Cypress.env('idToken'));
                //idToken = body.id_token;
                //cy.log("idToken = " + idToken);
                //return Cypress.env('idToken');
            });
        //cy.log("idtoken = " + idToken);
        //cy.log("Env idToken is: " + Cypress.env('idToken'));
        //return idToken;    
    }
}