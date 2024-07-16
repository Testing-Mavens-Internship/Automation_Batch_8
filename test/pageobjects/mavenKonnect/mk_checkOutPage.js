import CommonPage from "./mk_commonPage.js";

export class CheckOutPage extends CommonPage{
    constructor(){
        super();
        this.$checkOutHeader=()=>$(`//header[@class="site-header"]`);
        this.$fname=()=>$(`//input[@id="fname"]`)
        this.$email=()=>$(`//input[@id="email"]`);
        this.$address=()=>$(`//input[@id="adr"]`);
        this.$city=()=>$(`//input[@id="city"]`);
        this.$state=()=>$(`//input[@id="city"]`);
        this.$zip=()=>$(`//input[@id="zip"]`);
        this.$cardName=()=>$(`//input[@id="cname"]`);
        this.$cardNumber=()=>$(`//label[@for="ccnum"]`);
        this.$expMonth=()=>$(`//input[@id="expmonth"]`);
        this.$expYear=()=>$(`//input[@name="expyear"]`);
        this.$cvv=()=>$(`//input[@name="cvv"]`);
        this.$checkOutButton=()=>$(`//input[@value="Continue to checkout"]`)
    }
    async addDetails(fname, email, address, city, state, zip, cardNumber, expMonth, expYear, cvv) {
        await this.$fname().setValue(fname);
        await this.$email().setValue(email);
        await this.$address().setValue(address);
        await this.$city().setValue(city);
        await this.$state().setValue(state);
        await this.$zip().setValue(zip);
        await this.$cardNumber().setValue(cardNumber);
        await this.$expMonth().setValue(expMonth);
        await this.$expYear().setValue(expYear);
        await this.$cvv().setValue(cvv);
        await this.$checkOutButton().click();
    }
}
export default new CheckOutPage();