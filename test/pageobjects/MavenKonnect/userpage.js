import Common from "./common.js";

class Userpage extends Common{
    constructor(){
        super();
        this.$paymentHeader=()=>$(`//h1[text()="Check Out karo !"]`)
        this.$firstname=()=>$(`//input[@id="fname"]`)
        this.$email=()=>$(`//input[@id="email"]`)
        this.$nameOnCard=()=>$(`//input[@id="cname"]`)
        this.$address=()=>$(`//input[@id="adr"]`)
        this.$cardNumber=()=>$(`//input[@id="ccnum"]`)
        this.$city=()=>$(`//input[@id="city"]`)
        this.$expMonth=()=>$(`//input[@id="expmonth"]`)
        this.$state=()=>$(`//input[@id="state"]`)
        this.$zip=()=>$(`//input[@id="zip"]`)
        this.$expYear=()=>$(`//input[@id="expyear"]`)
        this.$cvv=()=>$(`//input[@id="cvv"]`)
        this.$submitbtn=()=>$(`//input[@type="submit"]`)
    }
    async valuesEntering(payDetails){
        await this.$firstname().setValue(payDetails.firstname);
        await this.$email().setValue(payDetails.email);
        await this.$nameOnCard().setValue(payDetails.nameOnCard);
        await this.$address().setValue(payDetails.address);
        await this.$cardNumber().setValue(payDetails.cardNumber);
        await this.$city().setValue(payDetails.city);
        await this.$expMonth().setValue(payDetails.expMonth);
        await this.$state().setValue(payDetails.state);
        await this.$zip().setValue(payDetails.zip);
        await this.$expYear().setValue(payDetails.expYear);
        await this.$cvv().setValue(payDetails.cvv);
        await this.$submitbtn().click();
}
}
export default new Userpage();