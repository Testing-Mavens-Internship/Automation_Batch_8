export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//span[text()="QA Playground"]')
    }

    async loadUrl()
    {
        await browser.url('https://qaplayground.dev/')
        await browser.maximizeWindow()
    }
}
