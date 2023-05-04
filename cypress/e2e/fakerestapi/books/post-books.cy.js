/// <reference types="cypress" />
import { BaseTest } from "../../../support/baseTest"

describe("POST /activities/{id} endpoint tests", () => {
    let baseTest = new BaseTest()
    let endpoint = `books/`
    let testUrl = baseTest.testUrl + endpoint

    // Test Data
    let goodId = `10`
    let goodBody = `{
        "id": 22,
        "title": "Bob's trip to the Zoo",
        "description": "Kids book about a trip to the Zoo.",
        "pageCount": 25,
        "excerpt": "Bob told his mom that the Giraffe was so tall.",
        "publishDate": "2023-05-01T01:42:29.239Z"
      }`

    let badBodyNoId = `{
        "title": "Bob's trip to the Zoo",
        "description": "Kids book about a trip to the Zoo.",
        "pageCount": 25,
        "excerpt": "Bob told his mom that the Giraffe was so tall.",
        "publishDate": "2023-05-01T01:42:29.239Z"
      }`
      let badBodyBadId = `{
        "id": 12340987213409872348970987908709879870897908709879822,
        "title": "Bob's trip to the Zoo",
        "description": "Kids book about a trip to the Zoo.",
        "pageCount": 25,
        "excerpt": "Bob told his mom that the Giraffe was so tall.",
        "publishDate": "2023-05-01T01:42:29.239Z"
      }`
      let badBodyBadPageCount = `{
        "id": 22,
        "title": "Bob's trip to the Zoo",
        "description": "Kids book about a trip to the Zoo.",
        "pageCount": 'Sally',
        "excerpt": "Bob told his mom that the Giraffe was so tall.",
        "publishDate": "2023-05-01T01:42:29.239Z"
      }`
      let badBodyNoDate = `{
        "id": 22,
        "title": "Bob's trip to the Zoo",
        "description": "Kids book about a trip to the Zoo.",
        "pageCount": 25,
        "excerpt": "Bob told his mom that the Giraffe was so tall."
      }`

    it(`${endpoint} Smoke test - happypath`, () => {
        cy.request({
            method: 'POST',
            url: testUrl,
            headers: baseTest.getHeader(),
            body: goodBody
        })
            .then((Response) => {
                expect(Response.status).to.eq(200)
                expect(Response.body).to.not.be.null
                let body = JSON.parse(JSON.stringify(Response.body))
                let goodBodystr = JSON.parse(goodBody)
                expect(body.id).to.equal(goodBodystr.id)
                expect(body.title).to.equal(goodBodystr.title)
                expect(body.publishDate).to.contain(goodBodystr.publishDate)
                expect(body.completed).to.equal(goodBodystr.completed)
            })
    })

    it(`${endpoint} bad id`, () => {
        cy.request({
            method: 'POST',
            url: testUrl,
            headers: baseTest.getHeader(),
            body: badBodyBadId,
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
                expect(Response.body).to.not.be.null
                let body = JSON.parse(JSON.stringify(Response.body))
                expect(body.title).to.contain(`One or more validation errors occurred.`)
            })
    })
    it(`${endpoint} no id`, () => {
        cy.request({
            method: 'POST',
            url: testUrl,
            headers: baseTest.getHeader(),
            body: badBodyNoId,
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
                expect(Response.body).to.not.be.null
                let body = JSON.parse(JSON.stringify(Response.body))
                expect(body.title).to.contain(`One or more validation errors occurred.`)
            })
    })
    it(`${endpoint} no date`, () => {
        cy.request({
            method: 'POST',
            url: testUrl,
            headers: baseTest.getHeader(),
            body: badBodyNoDate,
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
                expect(Response.body).to.not.be.null
                let body = JSON.parse(JSON.stringify(Response.body))
                expect(body.title).to.contain(`One or more validation errors occurred.`)
            })
    })
    it(`${endpoint} bad type for page count`, () => {
        cy.request({
            method: 'POST',
            url: testUrl,
            headers: baseTest.getHeader(),
            body: badBodyBadPageCount,
            failOnStatusCode: false
        })
            .then((Response) => {
                expect(Response.status).to.eq(400)
                expect(Response.body).to.not.be.null
                let body = JSON.parse(JSON.stringify(Response.body))
                expect(body.title).to.contain(`One or more validation errors occurred.`)
            })
    })


})