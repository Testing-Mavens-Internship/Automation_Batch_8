import Common from "./common.js";

class Cart extends Common{
    constructor(){
        super();
        this.$cartHeader=()=>$(`//span[text()="Your Cart"]`);
        this.$checkoutButton=()=>$(`//button[@id="checkout"]`);
        this.$checkoutHeader=()=>$(`//span[contains(text(),"Checkout")]`);
    }
    async checkoutButton(){
        await this.$checkoutButton().click();
    }
}
export default new Cart();