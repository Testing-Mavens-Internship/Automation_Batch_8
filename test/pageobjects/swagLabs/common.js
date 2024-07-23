export default class CommonPage {
    constructor(){

    }

    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url(`https://www.saucedemo.com/`);
    }
}