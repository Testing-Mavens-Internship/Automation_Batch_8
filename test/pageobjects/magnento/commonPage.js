
export default class CommonPage{
    constructor(){
        this.$men=()=>$('//a[@id="ui-id-5"]');
        this.$tops=()=>$('//a[@id="ui-id-17"]');
        this.$hoodies=()=>$('//a[@id="ui-id-20"]');
        this.$closePopUp=()=>$('//div[@class="ea-stickybox-hide"]');
    }
    /**
     * Launching the luma website
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://magento.softwaretestingboard.com/');
    }
     /**
     * Hover to men category in the navigation bar and select hoodies and sweatshirt
     */
     async hoverMen(){
        await this.$men().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header men is not visible" });
        const optionMen = await this.$men();
        await optionMen.moveTo();
    }
    /**
     * Hover to tops category under Men
     */
    async hoverTop(){
        await this.$tops().waitForDisplayed({timeout:5000, timeoutMsg: "Header top is not visible"});
        const optionTop = await this.$tops();
        await optionTop.moveTo();
    }
    /**
     * Hover to Hoodies and sweatshirt and click on it
     */
    async hoverHoodies(){
        await this.$hoodies().waitForDisplayed({timeout:5000, timeoutMsg: "Header hoodies is not visible"});
        const optionHoodies = await this.$hoodies();
        await optionHoodies.moveTo();

        await this.$hoodies().click();
    }
}