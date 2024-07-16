export default class Common{
    constructor(){

    }

    /**
     * Launch url in the browser
     */
    async launchUrl(){
        await browser.url("https://selectorshub.com/xpath-practice-page/");
        await browser.maximizeWindow();
    }
}