import Common from "./common.js";

class CheckoutOverview extends Common{
    constructor(){
        super();
        this.$overviewHeader=()=>$(`//span[text()="Checkout: Overview"]`);
        this.$finishButton=()=>$(`//button[text()="Finish"]`)
    }
    async clickFinishButton(){
        await this.$finishButton().waitForClickable({timeout:5000,timeoutMsg:"button is still not clicked"})
        await this.$finishButton().click();
    }
}
export default new CheckoutOverview()