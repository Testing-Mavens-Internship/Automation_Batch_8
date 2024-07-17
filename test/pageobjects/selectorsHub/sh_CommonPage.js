export default class CommonPage{
    constructor(){
        
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://selectorshub.com/xpath-practice-page/");
    }

}