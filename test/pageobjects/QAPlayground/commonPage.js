export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//span[text()="QA Playground"]')
        this.$apps=()=> $('//a[@href="/#apps"]')
    }

    async loadUrl()
    {
        await browser.url('https://qaplayground.dev/')
        await browser.maximizeWindow()
    }

    async clickAppsIcon()
    {
        await this.$apps().click()
    }
}
