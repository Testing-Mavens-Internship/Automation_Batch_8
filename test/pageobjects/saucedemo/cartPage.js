import Common from "./common.js";

class CartPage extends Common{
    constructor(){
        super();
        this.$checkoutButton=()=>$(`//button[text()="Checkout"]`);
    }
    async clickCheckoutButton(){
        await this.$checkoutButton().waitForDisplayed({timeout:5000,timeoutMsg:"checkout button is still not displayed"});
        await this.$checkoutButton().click();
    }
}
export default new CartPage()