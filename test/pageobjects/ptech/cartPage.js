import Common from "./commonPage.js";
class Cart extends Common{
    constructor(){
        super();
        this.$emptycartheader =()=>$(`//h1[@class="cart__empty-text"]`);
        this.$continueshop =()=>$(`//div[@class="cart__warnings"]/a`);
    }
    async clickContinueshop(){
        // await this.$emptycartheader().click().waitForDisplayed({timeout:4000,timeoutMsg:'Drop down items still not displayed'});
        await this.$emptycartheader().waitForDisplayed({ timeout: 4000, timeoutMsg: 'Empty cart header not displayed' });
        await this.$continueshop().click();
        
    }
}
export default new Cart();