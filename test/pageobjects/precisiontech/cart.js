import Common from "./common.js";
class cart extends Common{
    constructor(){
        super();
        this.$emptycart=()=>$(`//h1[text()="Your cart is empty"]`);
        this.$continueShopping=()=>$(`//div[@class="cart__warnings"]/a[contains(text(),"Continue shopping")]`);
    }
    async continueShopping(){
        await this.$continueShopping().click();
    }
 }
export default new cart();