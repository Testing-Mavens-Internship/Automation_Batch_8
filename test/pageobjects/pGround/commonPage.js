export default class basePage {
    constructor() {
        
    }

    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url('https://www.playground.testingmavens.tools/login')

    }
}