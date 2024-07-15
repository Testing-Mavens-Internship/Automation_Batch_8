class CheckoutPage{
    constructor(){
        this.$checkoutHeader=()=>$(`//h1[text()="Check Out karo !"]`)
        this.$fname=()=>$(`#fname`);
        this.$email=()=>$(`#email`);
        this.$address=()=>$(`#adr`);
        this.$city=()=>$(`#city`);
        this.$state=()=>$(`#state`);
        this.$zip=()=>$(`#zip`);
        this.$nameOnCard=()=>$(`#cname`);
        this.$creditCardNumber=()=>$(`#ccnum`);
        this.$expMonth=()=>$(`#expmonth`);
        this.$expYear=()=>$(`#expyear`);
        this.$cvv=()=>$(`#cvv`);
        this.$checkoutButton=()=>$(`//input[@value="Continue to checkout"]`);
    }
    async fillCheckoutDetails(name,email,address,city,state,zip,nameOnCard,creditCardNumber,expmonth,expyear,cvv){
        await this.$fname().setValue(name);
        await this.$email().setValue(email);
        await this.$address().setValue(address);
        await this.$city().setValue(city);
        await this.$state().setValue(state);
        await this.$zip().setValue(zip);
        await this.$nameOnCard().setValue(nameOnCard);
        await this.$creditCardNumber().setValue(creditCardNumber);
        await this.$expMonth().setValue(expmonth);
        await this.$expYear().setValue(expyear);
        await this.$cvv().setValue(cvv);
        await this.$checkoutButton().click();
    }
}
export default new CheckoutPage()