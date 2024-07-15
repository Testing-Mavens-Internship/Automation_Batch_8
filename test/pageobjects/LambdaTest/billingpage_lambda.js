import CommmonLambda from "./common_lambda.js";
class Billing extends CommmonLambda{
    constructor(){
        super()
        this.$firstName=()=>$(`//input[@id="input-payment-firstname"]`)
        this.$lastName=()=>$(`//input[@id="input-payment-lastname"]`)
        this.$company=()=>$(`//input[@id="input-payment-company"]`)
        this.$address1=()=>$(`//input[@id="input-payment-address-1"]`)
        this.$address2=()=>$(`//input[@id="input-payment-address-2"]`)
        this.$city=()=>$(`//input[@id="input-payment-city"]`)
        this.$postCode=()=>$(`//input[@id="input-payment-postcode"]`)
        this.$country=()=>$(`//select[@id="input-payment-country"]/option[@value="99"]`)
        this.$region=()=>$(`//select[@id="input-payment-zone"]/option[@value="1490"]`)
        this.checkbox=()=>$(`//div[@class="custom-control custom-checkbox"]/input[@name="agree"]/following::label`)
        this.$continue=()=>$(`//button[@id="button-save"]`)
        this.$billingProductname=()=>$(`(//table[@class="table table-bordered table-hover mb-0"]/tBody/tr/td[@class="text-left"])[1]`)
        this.$billingProductTotal=()=>$(`(//td[@class="text-right"])[13]`)
        

    }
    async enteringBillingDetails(){
        await this.$firstName().setValue("sidharth")
        await this.$lastName().setValue("richard")
        await this.$company().setValue("soda company")
        await this.$address1().setValue("qwerty")
        await this.$address2().setValue("qwertyuiop")
        await this.$city().setValue("ernakulam")
        await this.$postCode().setValue("682006")
        await this.$country().click();
        await this.$region().click();
        await this.checkbox().click();
        await this.$continue().click();

    }
   
}
export default new Billing();