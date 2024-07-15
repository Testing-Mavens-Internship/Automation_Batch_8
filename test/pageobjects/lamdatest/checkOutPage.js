import Common from '../lamdatest/common.js';

export class Checkout extends Common {
    constructor(){
        super();
            this.$Firstname=()=>$(`//input[@id="input-payment-firstname"]`);
            this.$Lastname=()=>$(`//input[@id="input-payment-lastname"]`);
            // this.$email=()=>$(`//input[@id="input-payment-email"]`);
            // this.$number=()=>$(`//input[@id="input-payment-telephone"]`);
            // this.$password=()=>$(`//input[@id="input-payment-password"]`);
            // this.$confirm=()=>$(`//input[@id="input-payment-confirm"]`);
            this.$address=()=>$(`//input[@id="input-payment-address-1"]`);
            this.$city=()=>$(`//input[@id="input-payment-city"]`);
            this.$postcode=()=>$(`//input[@id="input-payment-postcode"]`);
            this.$country=()=>$(`//select[@id="input-payment-country"]`);
            this.$selectCountry=()=>$(`(//option[text()="India"])[1]`);
            this.$region=()=>$(`//select[@id="input-payment-zone"]`);
            this.$selectRegion=()=>$(`//option[text()="Kerala"]`);
            // this.$checkBox1=()=>$(`(//div[@class="custom-control custom-checkbox"])[3]`);
            this.$checkBox2=()=>$(`(//div[@class="custom-control custom-checkbox"])[4]`);
            this.$continue=()=>$(`//button[normalize-space()="Continue"]`);
            this.$productName=()=>$(`//tbody/tr/td[normalize-space()="MacBook Air"]`);
            this.$totalPrice=()=>$(`(//tbody/tr/td[normalize-space()="$1,000.00"])[4]`);
            this.$verifyAddress=()=>$(``)
    }
    /**
     * To enter payment details
     * @param {String} fname 
     * @param {String} lname 
     * @param {String} address 
     * @param {String} city 
     * @param {String} postcode 
     */
    async enterPaymentDetails(fname,lname,address,city,postcode){
            await this.$Firstname().setValue(`${fname}`);
            await this.$Lastname().setValue(`${lname}`);
            // await this.$email().setValue(`${email}`);
            // await this.$number().setValue(`${num}`);
            // await this.$password().setValue(`${pass}`);
            // await this.$confirm().setValue(`${confirm}`);
            await this.$address().setValue(`${address}`);
            await this.$city().setValue(`${city}`);
            await this.$postcode().setValue(`${postcode}`);
            await this.$country().click();
            await this.$selectCountry().click();
            await this.$region().click();
            await this.$selectRegion().click();
    }
}

export default new Checkout();