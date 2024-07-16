export default class commonPage {
    constructor() {

    }

    async loadUrl() {
        await browser.url('https://ecommerce-playground.lambdatest.io/')
        await browser.maximizeWindow()
        }
}