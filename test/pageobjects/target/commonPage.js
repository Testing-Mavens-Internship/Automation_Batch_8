export default class CommonPage{
    constructor(){

        this.$targetLogo=()=>$("//a[@class="sc-676073c3-0 sc-7d77c0d1-0 fCfUJD cRBlGM"]");
    }
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://www.target.com/");
        await this.$targetLogo().waitForDisplayed({timeout:5000,timeoutMsg:"Logo not displayed."});
    }
}