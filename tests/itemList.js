var pageObjects = {}

module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.yoodlizePO()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Listing an item through log in': browser => {
        pageObjects
            .logIn('testing.yoodlize@gmail.com')
        pageObjects
            .click('@itemList')
            .waitForElementPresent('@nextBtn')
            .click('@nextBtn')
            .waitForElementPresent('@nextBtn')
            .setValue('@itemTitle', "Fast Frisbee")
            .setValue('@itemDesc', "This frisbee fly so fast. You no know how fast it fly.")
            .click('option[value="87"]')
            .pause(500)
            .click('@nextBtn')
            .useXpath()
            .waitForElementPresent('(//div[@class="brad-m sh-default bg-white p-mxx m-sxx relative "])[1]')
            .click('(//div[@class="brad-m sh-default bg-white p-mxx m-sxx relative "])[1]')
            .useCss()
            .click('@nextBtn')
            .waitForElementPresent('@itemInput')
            .setValue('@itemInput', "5")
            .click('@nextBtn')
            .waitForElementPresent('.clrdLJ')
            .click('select[label="Premade rules"] option[value="Child safe"]')
            .setValue('@itemInput', "Do not let it touch the ground")
            .click('.clrdLJ')
            .click('@nextBtn')
            .pause(1000)
            .click('@nextBtn')
            .imageInput('frisbee.jpg')
        pageObjects.expect.element('.hxTVNb').text.to.equal('Fast Frisbee')
        pageObjects.expect.element('.lhtIrb').text.to.contain('Salt Lake City')
        pageObjects.expect.element('.hxtXON').text.to.equal('This frisbee fly so fast. You no know how fast it fly.')
        pageObjects.expect.element('.ibHMcp').text.to.contain('5')
        pageObjects.expect.element('.iIXsbu').text.to.contain('Child safe')
        pageObjects
            .useXpath()
            .click('(//ins[@class="iCheck-helper"])[1]')
            .click('(//ins[@class="iCheck-helper"])[2]')
            .useCss()
            .click('@nextBtn')
            .pause(2000)
    }
}