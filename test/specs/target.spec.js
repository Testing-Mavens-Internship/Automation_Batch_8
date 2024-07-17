import shirtsPage from "../pageobjects/Target/shirtsPage.js";

describe('To verify workflow of Target website', () => {

    it('Launch URL in browser', async () => {
        await shirtsPage.loadUrl()
        await shirtsPage.$header().waitForDisplayed({ timeout: 5000 })
        expect(await shirtsPage.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    let tabs=['Categories', 'Deals', 'New & featured', 'Pickup & delivery']
    it('Check all headers are displayed', async () => {
        for(let item of tabs)
        {
        expect(await shirtsPage.$allHeaders(item)
        .isDisplayed()).withContext('Expect all headers to be displayed')
        .toBeTrue()
        }
    })

    it('Enter "Shirts" in Search bar', async () => {
        await shirtsPage.enterShirtsInSearch()
        await shirtsPage.$shirtsValidation().waitForDisplayed({ timeout: 5000 })
        expect(await shirtsPage.$shirtsValidation()
        .isDisplayed()).withContext('Expect "shirts" to be displayed in Shirts page')
        .toBeTrue()
    })

    it('Click on Pattern button', async () => {
        await shirtsPage.clickPattern()
        await shirtsPage.$patternButton().waitForDisplayed({ timeout: 5000 })
        expect(await shirtsPage.$patternButton()
        .isDisplayed()).withContext('Expect Pattern header to be displayed')
        .toBeTrue()
    })

    it('Click on Floral button from Pattern', async () => {
        await shirtsPage.clickFloral()
        await shirtsPage.$floralFilter().waitForDisplayed({ timeout: 5000 }) //static $floralFilter
        expect(await shirtsPage.$floralFilter()
        .isDisplayed()).withContext('Expect Pattern header to be displayed')
        .toBeTrue()
        //validate Filter-1, Pattern-1
    })

    it('Click on Add to Cart button of first product', async () => {
        await shirtsPage.clickAddToCart()
        // await shirtsPage.$floralFilter().waitForDisplayed({ timeout: 5000 }) //static $floralFilter
        // expect(await shirtsPage.$floralFilter()
        // .isDisplayed()).withContext('Expect Pattern header to be displayed')
        // .toBeTrue()
    })
})
