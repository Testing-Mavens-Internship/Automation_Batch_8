export default class Luma {
    constructor(){
        this.$menOption=()=>$(`//span[text()="Men"]`);
        this.$topsOption=()=>$(`//a[@id="ui-id-17"]`);
        this.$clickJacket=()=>$(`//a[@id="ui-id-17"]/following::span[text()="Jackets"]`);
        this.$productHeader=()=>$(`//h1[@class="page-title"]`);
    }
    /**
     * Hover over men option
     */
    async hoverOverMen(){
        await this.$menOption().moveTo();
        await this.$topsOption().moveTo();
    }
    /**
     * To click on Jackets option
     */
    async clickJacket(){
        await this.$clickJacket().click();
    }
    /**
     * To load url
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url('https://magento.softwaretestingboard.com/');
    }
}