import Common from "./common.js";

class CartPage extends Common {

    constructor()
    {
        super()
        this.$cartHeader=()=> $('//span[text()="Your Cart"]')
        this.$checkoutButton=()=> $('//button[@id="checkout"]')
    }

    async clickCheckoutButton()
    {
        await this.$checkoutButton().click()
    }

}

export default new CartPage()
