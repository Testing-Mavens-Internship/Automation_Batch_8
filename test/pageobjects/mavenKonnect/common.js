export default class Common{
    constructor(){
    
    }
    /**
     * To load url of the application
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://demotmwebsite.github.io/');

    }
}