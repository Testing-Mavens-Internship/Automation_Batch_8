import CommonClass from "./commonPage.js";
class Cart extends CommonClass{
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