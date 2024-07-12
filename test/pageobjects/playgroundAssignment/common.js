export default class Common{
    constructor(){
        this.$header=()=> $('//span[text()="PLAYGROUND"]')
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://www.playground.testingmavens.tools/')

    }
}