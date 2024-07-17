export default class commonPage {
    constructor() {

    }

    async loadUrl() {
        await browser.url('https://selectorshub.com/xpath-practice-page/')
        await browser.maximizeWindow()
    }
}