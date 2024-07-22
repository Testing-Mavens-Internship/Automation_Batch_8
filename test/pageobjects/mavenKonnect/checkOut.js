import Common from "../mavenKonnect/common.js"

export class Checkout extends Common {
    constructor(){
        super();
        this.$fullName=()=>$(`//input[@id="fname"]`);
        this.$email=()=>$(`//input[@id="email"]`);
        this.$address=()=>$(`//input[@id="adr"]`);
        this.$city=()=>$(`//input[@id="city"]`);
        this.$state=()=>$(`//input[@id="state"]`);
        this.$zipCode=()=>$(`//input[@id="zip"]`);
        this.$nameOnCard=()=>$(`//input[@id="cname"]`);
        this.$creditCardNumber=()=>$(`//input[@id="ccnum"]`);
        this.$expiryMonth=()=>$(`//input[@id="expmonth"]`);
        this.$expiryYear=()=>$(`//input[@id="expyear"]`);
        this.$cvv=()=>$(`//input[@id="cvv"]`);
        this.$checkoutButton=()=>$(`//input[@type="submit"]`);
    }
    /**
     * To enter checkout deatils
     * @param {string} fullName 
     * @param {string} email 
     * @param {string} address 
     * @param {string} city 
     * @param {string} state 
     * @param {number} zipCode 
     * @param {string} nameOnCard 
     * @param {number} creditCardNumber 
     * @param {string} expiryMonth 
     * @param {number} expiryYear 
     * @param {number} cvv 
     */
    async addDetails(fullName, email, address, city, state, zipCode, nameOnCard, creditCardNumber, expiryMonth, expiryYear, cvv) {
        await this.$fullName().setValue(fullName);
        await this.$email().setValue(email);
        await this.$address().setValue(address);
        await this.$city().setValue(city);
        await this.$state().setValue(state);
        await this.$zipCode().setValue(zipCode);
        await this.$nameOnCard().setValue(nameOnCard);
        await this.$creditCardNumber().setValue(creditCardNumber);
        await this.$expiryMonth().setValue(expiryMonth);
        await this.$expiryYear().setValue(expiryYear);
        await this.$cvv().setValue(cvv);
        await this.$checkoutButton().click();
    }
}
export default new Checkout();