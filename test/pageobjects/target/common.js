export default class Common {
    constructor(){

    }

    /**
     * To load url of the website
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://www.target.com/');
    }
}