export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//img[@alt="automateNow Logo"]')
        this.$home=()=> $('//a[@href="https://practice-automation.com/" and text()="Home"]')
    }

    async loadUrl()
    {
        await browser.url('https://practice-automation.com/')
        await browser.maximizeWindow()
    }

    async clickHome()
    {
        await this.$home().click()
    }
}
