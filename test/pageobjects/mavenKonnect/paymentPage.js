import Common from "./common.js";
class Payment extends Common{
    constructor(){
        super();
        this.$fullnamefield=()=>$(`//input[@id="fname"]`);
        this.$emailfield=()=>$(`//input[@id="email"]`);
        this.$nameoncardfield=()=>$(`//input[@id="cname"]`);
        this.$addressfield=()=>$(`//input[@id="adr"]`);
        this.$creditcardnumberfield=()=>$(`//input[@id="ccnum"]`);
        this.$city=()=>$(`//input[@id="city"]`);
        this.$expmonth=()=>$(`//input[@id="expmonth"]`);
        this.$state=()=>$(`//input[@id="state"]`);
        this.$zip=()=>$(`//input[@id="zip"]`);
        this.$expyear=()=>$(`//input[@id="expyear"]`);
        this.$cvv=()=>$(`//input[@id="cvv"]`);
        this.$submit=()=>$(`//input[@class="btn"]`);
        
    }

    async enterDetails(name,email,nameoncc,address,ccnum,city,expmonth,state,zip,expyear,cvv){
        await this.$fullnamefield().setValue(name);
        await this.$emailfield().setValue(email);
        await this.$nameoncardfield().setValue(nameoncc);
        await this.$addressfield().setValue(address);
        await this.$creditcardnumberfield().setValue(ccnum);
        await this.$city().setValue(city);
        await this.$expmonth().setValue(expmonth);
        await this.$state().setValue(state);
        await this.$zip().setValue(zip);
        await this.$expyear().setValue(expyear);
        await this.$cvv().setValue(cvv);
        await this.$submit().click();
    }
}
export default new Payment();