import downloadPage from "../pageobjects/AutomationDemo/downloadPage.js";

describe('To verify Download functionality', () => {

    it('Launch URL in browser', async () => {
        await downloadPage.launchUrl()
        await downloadPage.$header().waitForDisplayed({ timeout: 5000 })
        expect(await downloadPage.$header().isDisplayed())
        .withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click Download button', async () => {
        await downloadPage.clickDownload()
    })

    it('Type in textbox and download', async () => {
        await downloadPage.enterTextAndDownload()
    })

})