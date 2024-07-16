import CommonPage from "./commonPage.js";
class Cart extends CommonPage{
    constructor(){
        super();
        this.$productInCart=()=>$('(//a[@href="https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42"])[4]')
        this.$continue=()=>$('//a[text()="Checkout"]');
    }
    async clickContinue(){
        await this.$continue().click();
    }
}
export default new Cart();