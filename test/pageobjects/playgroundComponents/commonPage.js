export default class commonPage
{
    constructor()
    {
        this.$components=()=>$('//a[text()="Components"]')

    }
    /**
     * Load URL
     */
    async loadUrl()
    {
        await browser.maximizeWindow();
        await browser.url("https://www.playground.testingmavens.tools/")
        await browser.pause(3000)
    }
    async clickComponate()
    {
        await this.$components().click()
        await this.$header().waitForDisplayed({timeout:5000,timeoutMsg:"Header not found"})
    }
}