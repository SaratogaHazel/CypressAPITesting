export const Login ={
    BeLogin() {
        cy.request({    
            method: 'POST',
            url: 'https://test.com/v1/token',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'JSESSIONID=0F6C4A1A8930B05C1616BC2B26D72BB8'
            },
            body: {
                'grant_type': "client_credentials",
                'scope': "client_token",
                'Accept-Encoding': "gzip, deflate, br",
                'client_id': Cypress.env('clientId'),
                'client_secret': Cypress.env('clientPwd')
            }
        })
        .then((Response) => {
            cy.wait(2000);
            let body = JSON.parse(JSON.stringify(Response.body));
            let token2 = body.access_token;
            Cypress.env({ AccessToken: token2 });
        });
        return this;
    }, 

    feLogin (url){
        cy.log(`URL: ${url}`);
        cy.urlLogin(url, Cypress.env("username"), Cypress.env("password"));
        cy.wait(2000)
        cy.getCookie(Cypress.env('access_token'))
            .should('exist')
            .then((c) =>{
                cy.wait(1000);
                cy.log(`cookie: ${c.value}`);
                Cypress.env({idToken: c.value});
            });
        return this;
    },
}
