export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//img[@class="entered lazyloaded"]')
    }

    async loadUrl()
    {
        await browser.url('https://selectorshub.com/xpath-practice-page/')
        await browser.maximizeWindow()
    }
}
