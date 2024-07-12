export default class Common{
    constructor(){
    
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://demotmwebsite.github.io/');

    }
}