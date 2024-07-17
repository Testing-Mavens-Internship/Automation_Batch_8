export default class Common{
    constructor(){

    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.akbartravels.com/in/flight?lan=en");
    }
}