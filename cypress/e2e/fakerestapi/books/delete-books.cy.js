/// <reference types="cypress" />
import { BaseTest } from "../../../support/baseTest"

describe("DELETE /Books endpoint tests", () => {
    let baseTest = new BaseTest("fakerestapi")
    let endpoint = `Books/`
    let testUrl = baseTest.testUrl + endpoint

    // Test Data
    let goodId = `10`

    it(`${endpoint} Smoke test - happypath`, () => {
        cy.request({
            method: 'DELETE',
            url: testUrl + goodId,
            headers: baseTest.getHeader(),
        })
            .then((Response) => {
                expect(Response.status).to.eq(200)
                expect(Response.body).to.not.be.null
            })
    })

    it(`${endpoint} badId: ${baseTest.badId}`, () => {
        cy.request({
            method: 'DELETE',
            url: testUrl + baseTest.badId,
            headers: baseTest.getHeader(),
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(404)
            })
    })

    it(`${endpoint} wrong type: ${baseTest.text}`, () => {
        cy.request({
            method: 'DELETE',
            url: testUrl + baseTest.text,
            headers: baseTest.getHeader(),
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
            })
    })

    it(`${endpoint} long number: ${baseTest.longNumber}`, () => {
        cy.request({
            method: 'DELETE',
            url: testUrl + baseTest.longNumber,
            headers: baseTest.getHeader(),
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
            })
    })

    it(`${endpoint} other characters: ${baseTest.otherChars}`, () => {
        cy.request({
            method: 'DELETE',
            url: testUrl + baseTest.otherChars,
            headers: baseTest.getHeader(),
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
            })
    })

    it(`${endpoint} unicode: ${baseTest.unicode1}`, () => {
        cy.request({
            method: 'DELETE',
            url: testUrl + baseTest.unicode1,
            headers: baseTest.getHeader(),
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
            })
    })
 
})