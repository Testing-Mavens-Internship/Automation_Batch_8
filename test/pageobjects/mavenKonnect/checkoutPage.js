import CommonPage from "./commonPage.js"

export class CheckoutPage extends CommonPage {
    constructor(){
        super();
        this.$fullName=()=>$('//input[@id="fname"]');
        this.$email=()=>$('//input[@id="email"]');
        this.$address=()=>$('//input[@id="adr"]');
        this.$city=()=>$('//input[@id="city"]');
        this.$state=()=>$('//input[@id="state"]');
        this.$zipCode=()=>$('//input[@id="zip"]');
        this.$nameOnCard=()=>$('//input[@id="cname"]');
        this.$creditCardNumber=()=>$('//input[@id="ccnum"]');
        this.$expMonth=()=>$('//input[@id="expmonth"]');
        this.$expYear=()=>$('//input[@id="expyear"]');
        this.$cvv=()=>$('//input[@id="cvv"]');
        this.$submit=()=>$(`//input[@class="btn"]`);
    }
    async addDetails(fullName, email, address, city, state, zipCode, nameOnCard, creditCardNumber, expiryMonth, expiryYear, cvv) {
        await this.$fullName().setValue(fullName);
        await this.$email().setValue(email);
        await this.$address().setValue(address);
        await this.$city().setValue(city);
        await this.$state().setValue(state);
        await this.$zipCode().setValue(zipCode);
        await this.$nameOnCard().setValue(nameOnCard);
        await this.$creditCardNumber().setValue(creditCardNumber);
        await this.$expMonth().setValue(expiryMonth);
        await this.$expYear().setValue(expiryYear);
        await this.$cvv().setValue(cvv);
        await this.$submit().click();
    }
}
export default new CheckoutPage();