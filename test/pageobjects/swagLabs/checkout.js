import Common from "./common.js";

class Checkout extends Common{
    constructor(){
        super();
        this.$values=(value)=>$(`//input[@placeholder="${value}"]`); 
        this.$continueButton=()=>$(`//input[@id="continue"]`); 
        this.$overview=()=>$(`//span[text()="Checkout: Overview"]`); 
        this.$finishButton=()=>$(`//button[@id="finish"]`); 
        this.$thankyouMsg=()=>$(`//h2[contains(text(),"Thank")]`); 
    }
    async checkout(fname,lname,zip){
        await this.$values('First Name').setValue(fname);
        await this.$values('Last Name').setValue(lname);
        await this.$values('Zip/Postal Code').setValue(zip);
        await this.$continueButton().click();
    }
    async placeOrder(){
        await this.$finishButton().click();
    }
}
export default new Checkout();