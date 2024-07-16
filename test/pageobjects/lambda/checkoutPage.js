import CommonPage from "./commonPage.js";
class Checkout extends CommonPage{
    constructor(){
        super()
        this.$checkoutHeader=()=>$('//li[text()="Checkout"]');
        this.$firstName=()=>$('//input[@name="firstname"]');
        this.$lastName=()=>$('//input[@name="lastname"]');
        this.$address=()=>$('//input[@name="address_1"]');
        this.$city=()=>$('//input[@name="city"]');
        this.$postCode=()=>$('//input[@name="postcode"]');
        this.$country=()=>$('//input[@name="country_id"]');
        this.$region=()=>$('//input[@name="zone_id"]');
        this.$Privacy=()=>$('//label[@for="input-agree"]');
        this.$continue=()=>$('//button[normalize-space()="Continue"]');
    }
   async enterDetails(firstname,lastname,address,city,postCode,country,region){
    await this.$firstName().setValue(firstname);
    await this.$lastName().setValue(lastname);
    await this.$address().setValue(address);
    await this.$city().setValue(city);
    await this.$postCode().setValue(postCode);
    await this.$country().click();
    
    await this.$region().setValue(region);
    await this.$privacy().click();
    await this.$continue().click();
   }
}
export default new Checkout();