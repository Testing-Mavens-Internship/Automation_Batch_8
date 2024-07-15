export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//div[@class="flex items-center justify-between h-full"]/a/div[text()="PlayGround"]')
    }

    async loadUrl()
    {
        await browser.url('https://www.playground.testingmavens.tools/')
        await browser.maximizeWindow()
    }
}
