export default class Common {
    constructor(){

    }
    /**
     * To load url of the website
     */
    async loadUrl(){
            await browser.maximizeWindow();
            await browser.url(`https://ecommerce-playground.lambdatest.io/`);
    }
}