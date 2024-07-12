export default class basePage {
    constructor() {
        
    }

    async loadUrl() {
        await browser.url('https://www.playground.testingmavens.tools/login')

    }
}