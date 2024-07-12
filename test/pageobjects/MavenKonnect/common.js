export default class Common{
    constructor(){

    }
      
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://demotmwebsite.github.io/");
        //await browser.pause(3000);// can use waitforDisplayed();
    }
}