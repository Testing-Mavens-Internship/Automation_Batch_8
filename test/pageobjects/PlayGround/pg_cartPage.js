class CartPage {

    constructor()
    {
        //super()
        this.$proceedToCheckoutBtn=()=> $('//button[text()="Proceed to Checkout"]')
    }

    async proceedToCheckout()
    {
        await this.$proceedToCheckoutBtn().click()
    }

}

export default new CartPage()
