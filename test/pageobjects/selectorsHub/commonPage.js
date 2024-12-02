export default class commonPage {
    constructor() {
    }
/**
 * This function is for load the URL
 */
async loadUrl() {
    await browser.url('https://selectorshub.com/xpath-practice-page/')
    await browser.maximizeWindow()
}
}