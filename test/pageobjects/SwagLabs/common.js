export default class Common {

    constructor()
    {
        this.$header=()=> $('//div[text()="Swag Labs"]')
    }

    async loadUrl()
    {
        await browser.url('https://www.saucedemo.com/')
        await browser.maximizeWindow()
    }
}
