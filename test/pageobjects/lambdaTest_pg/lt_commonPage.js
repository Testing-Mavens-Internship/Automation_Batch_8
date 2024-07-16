export default class CommonPage{
    constructor(){
        this.$lastName=()=>$(`//input[@id="input-lastname"]`);
        this.$continueButton=()=>$(`//input[@value="Continue"]`);
    }
    /**
     * Method to load URL
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://ecommerce-playground.lambdatest.io/");
    }
}