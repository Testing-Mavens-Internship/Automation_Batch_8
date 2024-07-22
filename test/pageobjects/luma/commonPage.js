export default class CommonPage{
    constructor(){
        this.$websiteLogo=()=>$(`//a[@class="logo"]`)
    }
    /**
     * Launching the website.
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://magento.softwaretestingboard.com/");
        await this.$websiteLogo().waitForDisplayed({timeout:5000,timeoutmsg:"Logo not displayed"});
    }
}