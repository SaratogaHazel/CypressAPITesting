/// <reference types="cypress" />
export class BaseTest {
  static token = `1`
  constructor(env, app) {
    if (env == `prod`) env = `www`
    console.log(`environment for testcase: ${env}`)
    this.token = ""
    this.cookie = ""

    // Test variables
    this.noAuthUser = 'pattersonbea'
    this.noAuthUserId = 3833836431594402
    this.text = `Robert`
    this.phrase = `bob is my uncle`
    this.emptyString = ``
    this.longNumber = `12347893415098712908437213490789851239089023417897890`
    this.longString = `jkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkf`
    this.verylongString = `jkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkfjkl903u23u84aklj89023890adfsdfjkldfs3490sdfagfx.zcn,vwlfasdgkdfjklsadkf`
    this.badId = `000001111`
    this.otherChars = `~!#@!$%$#@$#^#$%&^*%%^&*"::'{}[]\|<>?,.`
    this.unicode1 = 'العائلات إلى الأبد'
    this.unicode2 = '家庭是永遠的'
    this.xsscode = '<script>alert(‘XSS’)</script>'
    this.sqlInjectionInt = '105 OR 1=1'
    this.sqlInjectionStr = 'bob OR 1=1'
    this.reallyLongNumber = '01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'

    switch (app) {
      case "fakerestapi":
        this.testUrl = `https://fakerestapi.azurewebsites.net/api/v1/`
        break

      case "swapi":
        this.testUrl = `https://swapi.dev/api/`
        break

      default:
        this.testUrl = `https://fakerestapi.azurewebsites.net/api/v1/`
        break

    }
    Cypress.env({ baseUrl: this.baseUrl })
    Cypress.env({ access_token: this.cookie })
    Cypress.env({ lane: env})
    console.log(`testUrl for testcases: ${this.testUrl}`)
  }

  // the options for headerType are: basic, badAuth or noAuth
  // if token is 1, that means, bad token
  // use proxyId if you want different results based on the login user.
  getHeader(headerType = "basic", token = `1`, proxyId = null) {
    let header

    if (proxyId == null) {
      header = {
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    }
    else {
      header = {
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'proxyAs': `${proxyId}`
      }
    }

    switch (headerType) {
      case "badAuth":
        header = {
          'Authorization': `Bearer ${token}`,
          'Accept': '*/*',
          'Content-Type': 'application/json'
        }
        break
      case "noAuth":
        header = {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        }
        break
    }
    return header
  }

}