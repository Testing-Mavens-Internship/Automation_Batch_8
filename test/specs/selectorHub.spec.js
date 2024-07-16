import page from "../pageobjects/SelectorHub/page.js"
import nextPage from "../pageobjects/SelectorHub/nextPage.js"

describe('To verify workflow of SelectorHub website', () => {

    it('Launch URL in browser', async () => {
        await page.loadUrl()
        await page.$header().waitForDisplayed({ timeout: 5000 })
        expect(await page.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Enter the details', async () => {
        await page.enterValues()
        expect(await page.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Hover over "Checkout here" option', async () => {
        await page.hoverCheckoutDropdown()
        await page.$joinTrainingOption().waitForDisplayed({ timeout: 5000 })
        expect(await page.$joinTrainingOption()
        .isDisplayed()).withContext('Expect Join Training option to be displayed')
        .toBeTrue()
    })

    it('Select an option from "Checkout here" option', async () => {
        await page.selectOptionFromCheckout()
        await nextPage.$nextPageHeader().waitForDisplayed({ timeout: 5000 })
        expect(await nextPage.$nextPageHeader()
        .isDisplayed()).withContext('Expect next page header to be displayed')
        .toBeTrue()
    })

    it('Switch window to parent tab', async () => {
        await browser.switchWindow('https://selectorshub.com/xpath-practice-page/')
        await page.$header().waitForDisplayed({ timeout: 10000 })
        expect(await page.$header()
        .isDisplayed()).withContext('Expect parent page header to be displayed')
        .toBeTrue()
    })

    it('Click on "Choose a car" dropdown', async () => {
        await page.clickChooseAcarDropdown()
        await page.$carOption().waitForDisplayed({ timeout: 5000 })
        expect(await page.$carOption()
        .isDisplayed()).withContext('Expect car options to be displayed')
        .toBeTrue()
    })

    it('Select a car from "Choose a car" dropdown', async () => {
        await page.selectOptionFromCar()
        await page.$header().waitForDisplayed({ timeout: 5000 })
        expect(await page.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Upload File', async () => {
        await page.uploadFile()
        expect(await page.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Download File', async () => {
        await page.downloadFile()
        expect(await page.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
        await browser.pause(5000)
    })

    // it('Access Iframe', async () => {
    //     await page.accessIframe()
    //     await page.$iframeHeader().waitForDisplayed({ timeout: 5000 })
    //     expect(await page.$iframeHeader()
    //     .isDisplayed()).withContext('Expect Cross Origin iframe Scenario to be displayed')
    //     .toBeTrue()
    //  })

    //  it('Switch back to Parent frame', async () => {
    //     await page.backToParent()
    //     await page.$header().waitForDisplayed({ timeout: 5000 })
    //     expect(await page.$header()
    //     .isDisplayed()).withContext('Expect SELECTORHUB logo to be displayed')
    //     .toBeTrue()
    // })

})
