/// <reference types="cypress" />
import { BaseTest } from "../../../support/baseTest"

describe("POST /activities/{id} endpoint tests", () => {
    let baseTest = new BaseTest()
    let endpoint = `activities/`
    let testUrl = baseTest.testUrl + endpoint

    // Test Data
    let goodId = `10`
    let goodBody = `{
        "id": 31,
        "title": "Gone With the Wind",
        "dueDate": "2023-04-30T03:38:18.785Z",
        "completed": false
      }`

    let badBodyNoId = `{
        "title": "Gone With the Wind",
        "dueDate": "2023-04-30T03:38:18.785Z",
        "completed": false
      }`
      let badBodyBadId = `{
        "id": 13422123421432143213443,
        "title": "Gone With the Wind",
        "dueDate": "2023-04-30T03:38:18.785Z",
        "completed": false
      }`
      let badBodyBadComplete = `{
        "id": 31,
        "title": "Gone With the Wind",
        "dueDate": "2023-04-30T03:38:18.785Z",
        "completed": "bob"
      }`
      let badBodyNoDate = `{
        "id": 31,
        "title": "Gone With the Wind",
        "completed": false
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
                expect(body.dueDate).to.contain(goodBodystr.dueDate)
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
    it(`${endpoint} bad type for completed`, () => {
        cy.request({
            method: 'POST',
            url: testUrl,
            headers: baseTest.getHeader(),
            body: badBodyBadComplete,
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