export default class Common
{
    constructor()
    {
       this.$header=()=>$('//div[text()="Swag Labs"]') 
       this.$nameLabel=()=>$('//input[@placeholder="Username"]')
    }

    /**
     * Load Url
     */
    async loadUrl()
    {
        await browser.maximizeWindow()
        await browser.url('https://www.saucedemo.com/')
        await this.$nameLabel().waitForDisplayed({timeout:5000,timeoutMsg:"Not displayed yet"})

    }
}