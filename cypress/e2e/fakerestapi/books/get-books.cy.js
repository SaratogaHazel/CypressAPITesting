/// <reference types="cypress" />
import { BaseTest } from "../../../support/baseTest"

describe("GET /Books endpoint tests", () => {
    let baseTest = new BaseTest("fakerestapi")
    let endpoint = `Books/`
    let testUrl = baseTest.testUrl + endpoint

    // Test Data
    let goodId = `10`

    it(`${endpoint} Smoke test - happypath no Id`, () => {
        cy.request({
            method: 'GET',
            url: testUrl,
            headers: baseTest.getHeader(),
        })
            .then((Response) => {
                expect(Response.status).to.eq(200)
                expect(Response.body).to.not.be.null
                cy.log(JSON.stringify(Response.body))
            })
    })

    it(`${endpoint} Smoke test - happypath with Id`, () => {
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
                expect(body.title).to.equal(`Book 10`)
                //expect(body.description).to.contain('Sit erat magna et gubergren ')
                expect(body.description).to.not.be.null
                expect(body.pageCount).to.equal(1000)
                expect(body.excerpt).to.not.be.null
            })
    })

    it(`${endpoint} badId: ${baseTest.badId}`, () => {
        cy.request({
            method: 'GET',
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
            method: 'GET',
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
            method: 'GET',
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
            method: 'GET',
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
            method: 'GET',
            url: testUrl + baseTest.unicode1,
            headers: baseTest.getHeader(),
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
            })
    })

    it(`${endpoint} no number:`, () => {
        cy.request({
            method: 'GET',
            url: testUrl,
            headers: baseTest.getHeader(),
        })
            .then((Response) => {
                expect(Response.status).to.eq(200)
            })
    })

})