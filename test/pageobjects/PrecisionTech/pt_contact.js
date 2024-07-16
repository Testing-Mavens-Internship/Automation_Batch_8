import Common from "./pt_commonPage.js";

class Contact extends Common{
    constructor(){
        super()
        this.$cHeader=()=>$(`//h2[normalize-space()='CONTACT US']`)
        this.$cCart=()=>$(`//a[@id='cart-icon-bubble']`)
    }

    async Hcontact(){
        await this.$cHeader();
    }

    async clickCart(){
        await this.$cCart().waitForDisplayed({timeout:3000,timeoutmessage:'not displayed'})
        await this.$cCart().click();

    }
}
export default new Contact();