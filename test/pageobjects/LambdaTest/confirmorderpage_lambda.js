import CommmonLambda from "./common_lambda.js";
class ConfirmOrder extends CommmonLambda{
    constructor(){
        super()
        this.$confirmHeader=()=>$(`//h1[@class="page-title mb-3"]`)
        this.$confirmbutton=()=>$(`//button[@id="button-confirm"]`)
        this.$continuebutton=()=>$(`//a[@class="btn btn-primary"]`)

    }
    async ConfirmOrder(){
        await this.$confirmbutton().click();
    }

    async clickOnContinue(){
        await this.$continuebutton().click();

    }
}
export default new ConfirmOrder();