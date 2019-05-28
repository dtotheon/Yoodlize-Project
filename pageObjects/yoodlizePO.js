var yoodlizeCommands = {
    logIn: function (email) {
        this
            .api.useXpath()
            .waitForElementVisible('//span[text()="Log in"]')
            .click('//span[text()="Log in"]')
        this.api.useCss()
            .waitForElementVisible('[name=email]')
            .setValue('[name="email"]', email)
            .setValue('[name="password"]', 'yoodlizetesting')
            .click('[type=submit]')
            .waitForElementVisible('a[href="/inbox"]')
        return this
    },
    navCat: function (testData) {
        testData.forEach(test => {
            this
                .click(test.selector)
                .pause(500)
                .useCss()
                .waitForElementVisible('.sc-jKVCRD')
                .verify.containsText('.sc-jKVCRD', test.category)
                .waitForElementVisible('.navbar-brand')
                .click('.navbar-brand')
        })
        this
        return this
    },
    search: function (value) {
        this
            .waitForElementVisible('input')
            .setValue('input', value)
            .click('.sc-uJMKN.fpBmEu')
            .waitForElementVisible('.sc-jKVCRD')
            .verify.containsText('.sc-jKVCRD', value)
            .click('#card-title')
            .waitForElementVisible('.sc-jqCOkK.hxTVNb')
            .verify.containsText('.sc-jqCOkK.hxTVNb', value)
        return this
    },
    request: function (date, days) {
        this
            .waitForElementVisible('.sc-uJMKN.bhaOto')
            .setValue('#date', date)
            .setValue('[type=number]', days)
            .click('.sc-uJMKN.bhaOto')
            .waitForElementVisible('.sc-jqCOkK.efFbwr')
            .verify.containsText('.sc-jqCOkK.efFbwr', 'Charles Bandberry')
            .click('._2Py7x')
            .waitForElementVisible('.sc-jqCOkK.dskild')
            .verify.containsText('.sc-jqCOkK.dskild', 'Request Sent')
            .logout()
        return this
    },
    logout: function () {
        this
            .click('#basic-nav-dropdown')
            .api.useXpath()
            .waitForElementVisible('(//span[text()="Logout"])[2]')
            .click('(//span[text()="Logout"])[2]')
            .waitForElementVisible('//span[text()="Log in"]')
        this.api.useCss
        return this
    },
    deny: function () {
        this
            .logIn('testing.yoodlize@gmail.com')
            .click('[href="/inbox"]')
            .api.useXpath()
            .waitForElementVisible('//div[contains(@class, "b-coolGrayLightest")]/div[contains(text(), "PENDING")]/../..//div[contains(@class, "pointer")]')
            .click('//div[contains(@class, "b-coolGrayLightest")]/div[contains(text(), "PENDING")]/../..//div[contains(@class, "pointer")]')
        this.api.useCss()
            .waitForElementVisible('.sc-uJMKN.bHUcDQ')
            .click('.sc-uJMKN.bHUcDQ')
            .waitForElementNotPresent('//div[contains(@class, "b-coolGrayLightest")]/div[contains(text(), "PENDING")]/../..//div[contains(@class, "pointer")]')
        return this
    },

    imageInput: function (image) {
        this
            .waitForElementVisible('button.sc-uJMKN.bhaOto.sc-ifAKCX.kvYMhQ', 5000)

        this.setValue("input[type=file]",
            require('path').resolve(`../yoodlizeProj/images/${image}`))
            .pause(2000)
        this.expect.element('button.sc-uJMKN.bhaOto.sc-ifAKCX.kvYMhQ').text.to.equal('Save & Next: Review').before(5000)
        this.click('button.sc-uJMKN.bhaOto.sc-ifAKCX.kvYMhQ')

        return this
    },

    newItemAdd: function (yProject) {
        yProject.forEach(test => {
            this
                .click('@itemList')
                .waitForElementPresent('@nextBtn')
                .click('@nextBtn')
                .waitForElementPresent('@nextBtn')
                .setValue('@itemTitle', test.title)
                .setValue('@itemDesc', test.description)
                .click(`option[value=${test.category}]`)
                .pause(500)
                .click('@nextBtn')
                .useXpath()
                .waitForElementPresent('(//div[@class="brad-m sh-default bg-white p-mxx m-sxx relative "])[1]')
                .click('(//div[@class="brad-m sh-default bg-white p-mxx m-sxx relative "])[1]')
                .useCss()
                .click('@nextBtn')
                .waitForElementPresent('@itemInput')
                .setValue('@itemInput', test.rate)
                .click('@nextBtn')
                .waitForElementPresent('.clrdLJ')
                .click(`select[label="Premade rules"] option[value=${test.pRules}]`)
                .setValue('@itemInput', test.description)
                .click('.clrdLJ')
                .click('@nextBtn')
                .pause(1000)
                .click('@nextBtn')
                .imageInput(test.image)
            this.expect.element('.hxTVNb').text.to.equal(test.title)
            this.expect.element('.lhtIrb').text.to.contain('Salt Lake City')
            this.expect.element('.hxtXON').text.to.equal(test.description)
            this.expect.element('.ibHMcp').text.to.contain(test.rate)
            this.expect.element('.iIXsbu').text.to.contain(test.pResults)
            this
                .useXpath()
                .click('(//ins[@class="iCheck-helper"])[1]')
                .click('(//ins[@class="iCheck-helper"])[2]')
                .useCss()
                .click('@nextBtn')
                .pause(2000)
        })
    }

}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [yoodlizeCommands],
    elements: {
        sAllTools: {
            selector: '(//div[text()="See all"])[1]',
            locateStrategy: 'xpath'
        },
        sAllOutdoor: {
            selector: '(//div[text()="See all"])[2]',
            locateStrategy: 'xpath'
        },
        sAllElectronics: {
            selector: '(//div[text()="See all"])[3]',
            locateStrategy: 'xpath'
        },
        sAllParty: {
            selector: '(//div[text()="See all"])[4]',
            locateStrategy: 'xpath'
        },
        sAllVehicles: {
            selector: '(//div[text()="See all"])[5]',
            locateStrategy: 'xpath'
        },
        sAllClothing: {
            selector: '(//div[text()="See all"])[6]',
            locateStrategy: 'xpath'
        },
        sAllHome: {
            selector: '(//div[text()="See all"])[7]',
            locateStrategy: 'xpath'
        },
        sAllToys: {
            selector: '(//div[text()="See all"])[8]',
            locateStrategy: 'xpath'
        },
        sAllLawn: {
            selector: '(//div[text()="See all"])[9]',
            locateStrategy: 'xpath'
        },
        sAllSporting: {
            selector: '(//div[text()="See all"])[10]',
            locateStrategy: 'xpath'
        },
        sAllBusiness: {
            selector: '(//div[text()="See all"])[11]',
            locateStrategy: 'xpath'
        },
        sAllVenues: {
            selector: '(//div[text()="See all"])[12]',
            locateStrategy: 'xpath'
        },
        sAllExperts: {
            selector: '(//div[text()="See all"])[13]',
            locateStrategy: 'xpath'
        },
        sAllExperiences: {
            selector: '(//div[text()="See all"])[14]',
            locateStrategy: 'xpath'
        },
        sAllMisc: {
            selector: '(//div[text()="See all"])[15]',
            locateStrategy: 'xpath'
        },
        fTools: {
            selector: '(//div[text()="TOOLS"])[2]',
            locateStrategy: 'xpath'
        },
        fOutdoor: {
            selector: '(//div[text()="OUTDOOR GEAR"])[2]',
            locateStrategy: 'xpath'
        },
        fElectronics: {
            selector: '(//div[text()="ELECTRONICS"])[2]',
            locateStrategy: 'xpath'
        },
        fParty: {
            selector: '(//div[text()="PARTY & WEDDING"])',
            locateStrategy: 'xpath'
        },
        fVehicles: {
            selector: '(//div[text()="RECREATIONAL VEHICLES"])[2]',
            locateStrategy: 'xpath'
        },
        fClothing: {
            selector: '(//div[text()="CLOTHING"])[2]',
            locateStrategy: 'xpath'
        },
        fHome: {
            selector: '(//div[text()="HOME & KITCHEN"])[2]',
            locateStrategy: 'xpath'
        },
        fToys: {
            selector: '(//div[text()="TOYS & GAMES"])[2]',
            locateStrategy: 'xpath'
        },
        fLawn: {
            selector: '(//div[text()="LAWN & GARDEN"])[2]',
            locateStrategy: 'xpath'
        },
        fSporting: {
            selector: '(//div[text()="SPORTING GOODS"])[2]',
            locateStrategy: 'xpath'
        },
        fBusiness: {
            selector: '(//div[text()="BUSINESS EQUIPMENT"])[2]',
            locateStrategy: 'xpath'
        },
        fVenues: {
            selector: '(//div[text()="VENUES"])[2]',
            locateStrategy: 'xpath'
        },
        fExperts: {
            selector: '(//div[text()="LOCAL EXPERTS"])[2]',
            locateStrategy: 'xpath'
        },
        fExperiences: {
            selector: '(//div[text()="EXPERIENCES"])[2]',
            locateStrategy: 'xpath'
        },
        fMisc: {
            selector: '(//div[text()="MISC"])[2]',
            locateStrategy: 'xpath'
        },
        navSearch: {
            selector: '(//*[text()="Search"])[1]',
            locateStrategy: 'xpath'
        },
        navWorks: {
            selector: '//*[text()="How it works"]',
            locateStrategy: 'xpath'
        },
        loginBtn: {
            selector: '//*[text()="Log in"]',
            locateStrategy: 'xpath'
        },
        sSearch: {
            selector: '//i[@class="fal fa-search hidden-md hidden-lg hidden-xs"]',
            locateStrategy: 'xpath'
        },
        fMusic: {
            selector: '(//div[text()="MUSIC"])',
            locateStrategy: 'xpath'
        },
        itemList: {
            selector: '//*[text()="List Your Stuff"]',
            locateStrategy: 'xpath'
        },
        nextBtn: {
            selector: '.bhaOto',
            locateStrategy: 'css'
        },
        categoryReq: {
            selector: '//select[@form="ListingForm"])[1]',
            locateStrategy: 'xpath'
        },
        categoryOpt: {
            selector: '//select[@form="ListingForm"])[2]',
            locateStrategy: 'xpath'
        },
        itemTitle: {
            selector: '.sc-hXRMBi',
            locateStrategy: 'css'
        },
        itemDesc: {
            selector: '.sc-bAeIUo',
            locateStrategy: 'css'
        },
        itemInput: {
            selector: '.sc-hXRMBi',
            locateStrategy: 'css'
        }

    },
}
