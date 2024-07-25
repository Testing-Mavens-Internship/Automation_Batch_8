import CommonPage from "./commonPage.js";

class ShoppingCartPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$shoppingCartHeader=()=> $('//h2[text()="Shopping Cart"]')
            this.$fishQuantity=()=> $('//input[@type="text" and @name="EST-20"]')
            this.$updateCart=()=> $('//input[@name="updateCartQuantities"]')
            this.$checkoutBtn=()=> $('//a[@href="/actions/Order.action?newOrderForm="]')
            this.$checkbox=()=> $('//input[@type="checkbox"]')
            this.$continueBtn=()=> $('//input[@name="newOrder"]')
        }
    }
    /**
    * Method to enter quantity as 2
    */
    async enterQty()
    {
        await this.$fishQuantity().setValue(2)
        await this.$updateCart().click()
    }

    /**
     * Method to click Proceed to Checkout button
     */
    async clickCheckoutBtn()
    {
        await this.$checkoutBtn().click()
    }

    /**
     * Method to tick mark checkbox
     */
    async clickCheckbox()
    {
        await this.$checkbox().click()
        await this.$continueBtn().click()
    }
}
export default new ShoppingCartPage()
