export default class CommonPage{
    constructor(){

    }
    /**
     * Method to Launch saucedemo website.
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.saucedemo.com/");
    }
}