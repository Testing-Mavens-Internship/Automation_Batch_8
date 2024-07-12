import CommonPage from "./commonPage.js";

class CartPage extends CommonPage{
    constructor(){
        super();
     this.$header=()=>$('//h1[text()="Your cart is empty"]');
     this.$continueShopping=()=>$('//a[@class="button"]')
    }
    async continueShopping(){
        await this.$continueShopping().click();
    }
}
export default new CartPage();