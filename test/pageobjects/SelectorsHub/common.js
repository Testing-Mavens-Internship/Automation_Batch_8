export default class common{
    constructor(){

    }
/**
 * Loading the url of the browser.
 */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://selectorshub.com/xpath-practice-page/");
    }
}