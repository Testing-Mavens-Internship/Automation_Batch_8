export default class basePage {
    constructor() {
        this.$txt=()=>(`//div[text()="PlayGround"]`)
    }
     async loadUrl() {
        await browser.url('https://www.playground.testingmavens.tools/')
    }
}