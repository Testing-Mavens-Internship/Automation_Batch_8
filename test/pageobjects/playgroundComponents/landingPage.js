import commonPage from "./commonPage.js";

class landingPage extends commonPage
{
    constructor()
    {
        super()
        this.$header=()=>$('//span[text()="PLAYGROUND"]')
        this.$components=()=>$('//a[text()="Components"]')
    }

    /**
     * Load URL
     */
    async clickComponate()
    {
        await this.$components().click()
        await this.$header().waitForDisplayed({timeout:5000,timeoutMsg:"Header not found"})
    }
}
export default new landingPage()