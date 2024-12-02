import basePage from "./commonPage.js";

class userPage extends basePage {
    constructor() {
        super();
        this.$header=()=>$(`//span[normalize-space()="MavenKonnect"]`)
        this.$fname = () => $('//input[@id="cname"]'); 
        this.$email=()=>$(`//input[@id="email"]`)
        this.$address=()=>$(`//input[@id="adr"]`)
        this.$city=()=>$(`//input[@id="city"]`)
        this.$state=()=>$(`//input[@id="state"]`)
        this.$zip=()=>$(`//input[@id="zip"]`)
        this.$cardNumber=()=>$(`//input[@id="ccnum"]`)
        this.$expMonth=()=>$(`//input[@id="expmonth"]`)
        this.$expYear=()=>$(`//input[@id="expyear"]`)
        this.$cvv=()=>$(`//input[@id="cvv"]`)
        this.$continue=()=>$('//input[@value="Continue to checkout"]')
        
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
        await this.$continue().click();
    }
    async yellowButton(){
        
    }

}
export default new userPage()