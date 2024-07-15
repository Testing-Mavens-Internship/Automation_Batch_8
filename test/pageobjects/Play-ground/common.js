export default class Common{
    constructor(){

    }
    async launchUrl(){
        await browser.url("https://www.playground.testingmavens.tools/");
        await browser.maximizeWindow();
    }
}