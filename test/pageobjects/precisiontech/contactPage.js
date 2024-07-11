import Common from "./common.js";

class contactPage extends Common{
    constructor(){
        super();
        this.$contact=()=>$(`//strong[text()="CONTACT US"]`);
        this.$cart=()=>$(`//a[@id="cart-icon-bubble"]/*[local-name()='svg']`) 
    }
    async clickCart(){
        await this.$cart().click();
    }
}

export default new contactPage();