var pageObjects = {}

var yProject = require('../testAssets/yProject')

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
            .newItemAdd(yProject)
    }
}