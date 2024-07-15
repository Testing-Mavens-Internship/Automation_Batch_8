class CartPage {

    constructor()
    {
        this.$cartEmpty=()=> $('//h1[text()="Your cart is empty"]')
        this.$contShop=()=> $('(//a[normalize-space()="Continue shopping"])[2]')
    }

    async clickContShop()
    {
        await this.$contShop().click()
    }
}

export default new CartPage()
