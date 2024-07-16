import CommonPage from "./pt_commonPage.js";

class CartPage extends CommonPage{
    constructor(){
        super();
        this.$cartMsg=()=>$(`//h1[text()="Your cart is empty"]`);
        this.$continue=()=>$(`//a[@class="button"]`)
    }
    async cart(){
        await this.$cartMsg().waitForDisplayed({timeout:3000})
}
async continueShopping(){
    await this.$continue().waitForDisplayed({timeout:3000})
    await this.$continue().click();
}
}
export default new CartPage