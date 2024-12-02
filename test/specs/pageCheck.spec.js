import pageCheck from "../pageobjects/qaPlayground/pageCheck.js"

describe('pageCheck', () => {
    it('load url', async () => {
        await pageCheck.loadUrl();
        await browser.maximizeWindow();
    })

    it('check', async () => {
        await pageCheck.check();
        expect(await pageCheck.$lastPage().isDisplayed())
        .withContext('notification should be visible')
        .toBeTrue();
    })
})