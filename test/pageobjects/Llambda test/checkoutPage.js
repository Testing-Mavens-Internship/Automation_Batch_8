import Common from "./commonPage.js";
export class Checkout extends Common {
    constructor(){
        super();
            this.$Firstname=()=>$(`//input[@id="input-payment-firstname"]`);
            this.$Lastname=()=>$(`//input[@id="input-payment-lastname"]`);
            this.$email=()=>$(`//input[@id="input-payment-email"]`);
            this.$number=()=>$(`//input[@id="input-payment-telephone"]`);
            this.$password=()=>$(`//input[@id="input-payment-password"]`);
            this.$confirm=()=>$(`//input[@id="input-payment-confirm"]`);
            this.$address=()=>$(`//input[@id="input-payment-address-1"]`);
            this.$city=()=>$(`//input[@id="input-payment-city"]`);
            this.$postcode=()=>$(`//input[@id="input-payment-postcode"]`);
            this.$country=()=>$(`//select[@id="input-payment-country"]`);
            this.$selectCountry=()=>$(`(//option[text()="India"])[1]`);
            this.$region=()=>$(`//select[@id="input-payment-zone"]`);
            this.$selectRegion=()=>$(`//option[text()="Kerala"]`);
            this.$checkBox1=()=>$(`(//div[@class="custom-control custom-checkbox"])[3]`);
            this.$checkBox2=()=>$(`(//div[@class="custom-control custom-checkbox"])[4]`);
            this.$continue=()=>$(`//button[normalize-space()="Continue"]`);
            this.$confirmorderheader=()=>$(`//h1[text()="Confirm Order"]`);
            this.$totalincheckout=()=>$(`(//td[text()="Total:"]/../child::td)[last()]`);
            
    }
 
    async enterPaymentDetails(){
            const randnum = Math.floor(Math.random() * 600)+200;
            await this.$Firstname().setValue(`jhon`);
            await this.$Lastname().setValue(`calter`);
            await this.$email().setValue(`jhon${randnum}@gmail.com`);
            await this.$number().setValue(`7687678598`);
            await this.$password().setValue(`qwert123`);
            await this.$confirm().setValue(`qwert123`);
            await this.$address().setValue(`ABC House`);
            await this.$city().setValue(`NY`);
            await this.$postcode().setValue(`787676`);
            await this.$country().click();
            await this.$selectCountry().click();
            await this.$region().click();
            await this.$selectRegion().click();
            await this.$checkBox1().click();
            await this.$checkBox2().click();
            await this.$continue().click();
            
    }
}
export default new Checkout();