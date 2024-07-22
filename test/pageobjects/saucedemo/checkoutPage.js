import Common from "./common.js";

class CheckoutPage extends Common{
    constructor(){
        super();
        this.$checkoutHeader=()=>$(`//span[text()="Checkout: Your Information"]`);
        this.$fname=()=>$(`//input[@id="first-name"]`);
        this.$lname=()=>$(`//input[@id="last-name"]`);
        this.$postalCode=()=>$(`//input[@id="postal-code"]`);
        this.$continueButton=()=>$(`//input[@id="continue"]`);
    }
    async setCheckoutDetails(fname,lname,zip){
        await this.$fname().setValue(fname);
        await this.$lname().setValue(lname);
        await this.$postalCode().setValue(zip);
    }
    async clickContinueButton(){
        await this.$continueButton().waitForClickable({timeout:5000,timeoutMsg:"button is still not clicked"})
        await this.$continueButton().click();
    }
}
export default new CheckoutPage();