/// <reference types="cypress" />
import { BaseTest } from "../../support/baseTest"

describe("GET /activities/{id} endpoint tests", () => {
    let baseTest = new BaseTest()
    let endpoint = `activities/`
    let testUrl = baseTest.testUrl + endpoint

    // Test Data
    let goodId = `10`

    it(`${endpoint} Smoke test - happypath`, () => {
        cy.request({
            method: 'GET',
            url: testUrl + goodId,
            headers: baseTest.getHeader(),
        })
            .then((Response) => {
                expect(Response.status).to.eq(200)
                expect(Response.body).to.not.be.null
                let body = JSON.parse(JSON.stringify(Response.body))
                expect(body.id).to.equal(10)
                expect(body.title).to.equal(`Activity 10`)
                expect(body.dueDate).to.contain('2023')
                expect(body.completed).to.be.true
            })
    })
    
})