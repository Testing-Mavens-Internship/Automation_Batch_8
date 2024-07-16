import CommonPage from "./commonPage.js";
class ConfirmOrder extends CommonPage{
    constructor(){
        super();
        this.$paymentDetails=()=>('(//div[@class="card-body"])[1]');
        this.$confirmOrder=()=>('//button[normalize-space()="Confirm Order"]')
    }
    async getDetails(){
        await this.$paymentDetails().getText();
    }
    async confirmOrder(){
        await this.$confirmOrder().click();
    }
}
export default new ConfirmOrder();