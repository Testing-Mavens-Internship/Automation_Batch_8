import common from "./commonPage.js";
class Cart extends common {
    constructor(){
        super();
        this.$checkoutbutton=()=>$(`//a[text()="Checkout"]`);
        this.$total=()=>$(`(//td[text()="Total:"])[2]/following-sibling::td/strong`);
    }
    async clickoncheckout(){
        await this.$checkoutbutton().click();
        let total = await this.$total().getText();
        return total;
    }
} export default new Cart();