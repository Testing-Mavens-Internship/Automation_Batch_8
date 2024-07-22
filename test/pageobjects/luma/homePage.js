import Common from '../luma/common.js';

export class Homepage extends Common {
    constructor(){
        super();
            this.$lumaLogo=()=>$(`//a[@class="logo"]`);
            this.$menOption=()=>$(`//span[text()="Men"]`);
            this.$topsOption=()=>$(`//a[@id="ui-id-17"]`);
            this.$clickJacket=()=>$(`//a[@id="ui-id-17"]/following::span[text()="Jackets"]`);
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
}

export default new Homepage();