export default class Common {
    constructor(){

    }
    /**
     * Method to Launch the Luma website.
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://magento.softwaretestingboard.com/");
    }
}