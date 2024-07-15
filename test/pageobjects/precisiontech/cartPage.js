class CartPage{
    constructor(){
        this.$cartEmpty=()=>$(`//h1[normalize-space()="Your cart is empty"]`)
        this.$continueShopping=()=>$(`//a[@class="button"]`)
    }
    async continueShoppingClick(){
        await this.$continueShopping().waitForDisplayed({timeout:1000,timeoutMsg:"button still not displayed"})
        await this.$continueShopping().click();
    }
}
export default new CartPage()