var yoodlizePage

module.exports = {
    beforeEach: browser => {
        yoodlizePage = browser.page.yoodlizePage()
        yoodlizePage.navigate()
    },
    after: browser => {
        browser.end()
    },

}