export default class commonPage {
    constructor(){

    }
    async loadUrl(){
        await browser.maximizeWindow()
        await browser.url()
    }
}