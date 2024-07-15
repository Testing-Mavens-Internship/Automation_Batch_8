export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//div[text()="PlayGround"]')
        this.$dropdown=()=> $('//*[local-name()="svg" and @viewBox="0 0 320 512"]')
        this.$logout=()=> $('//li[text()="Log Out"]')
    }

    async loadUrl()
    {
        await browser.url('https://www.playground.testingmavens.tools/')
        await browser.maximizeWindow()
    }
}
