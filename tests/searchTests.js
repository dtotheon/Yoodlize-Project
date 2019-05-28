var pageObjects = {}
let navCat = require('../pageAssets/navCatAssets')
let rent = require('../pageAssets/rentAssests')
module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.yoodlizePO()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Navigate Categories': browser => {
        pageObjects
        .navCat(navCat)
    },

        'Rent Item and Deny Request': browser => {
            rent.forEach(test => {
            pageObjects
            .logIn('testing.yoodlize1@gmail.com')
            .search(test.item)
            .request('11/22/2019','3')
            .deny()
            .logout()
        })
    },
    'Search is available on all pages': browser => {
        pageObjects
            .api.resizeWindow(960, 1080)
        pageObjects
            .waitForElementVisible('@navSearch')
            .pause(100)
            .verify.containsText('@navSearch', 'Search')
        pageObjects
            .pause(100)
            .click('@navWorks')
            .pause(100)
            .waitForElementVisible('@navSearch')
            .pause(100)
            .verify.containsText('@navSearch', 'Search')
        pageObjects
            .pause(100)
            .click('@navSearch')
            .pause(100)
            .waitForElementVisible('@navSearch')
            .pause(100)
        pageObjects
            .pause(100)
            .useXpath()
            .click('//*[text()="List an Item"]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@navSearch')
            .pause(100)
            .verify.containsText('@navSearch', 'Search')
        pageObjects
            .pause(100)
            .useXpath()
            .click('//*[text()="Terms"]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@navSearch')
            .pause(100)
            .verify.containsText('@navSearch', 'Search')
        pageObjects
            .pause(100)
            .useXpath()
            .click('//*[text()="Privacy"]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@navSearch')
            .pause(100)
            .verify.containsText('@navSearch', 'Search')
        pageObjects
            .pause(100)
            .logIn('testing.yoodlize1@gmail.com')
            .useXpath()
            .click('//*[text()="List Your Stuff"]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@sSearch')
            .pause(100)
        pageObjects
            .useXpath()
            .click('//i[@class="fal fa-comments hidden-md hidden-lg hidden-xs"]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@sSearch')
            .pause(100)
        pageObjects
            .useXpath()
            .click('(//*[text()="My Listings"])[2]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@sSearch')
            .pause(100)
        pageObjects
            .useXpath()
            .click('(//*[text()="Reviews"])[2]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@sSearch')
            .pause(100)
        pageObjects
            .useXpath()
            .click('(//*[text()="Profile"])[1]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@sSearch')
            .pause(100)
        pageObjects
            .useXpath()
            .click('//*[text()="Account"]')
            .useCss()
            .pause(100)
            .waitForElementVisible('@sSearch')
            .pause(100)
    }
}