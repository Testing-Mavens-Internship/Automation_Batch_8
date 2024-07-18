import CommonPage from "./commonPage.js";

class ComparePage extends CommonPage {

    constructor()
    {
        super()
        this.$compareHeader=()=> $('//span[@data-ui-id="page-title-wrapper"]')
        this.$proceedToCheckout=()=> $('//button[@id="top-cart-btn-checkout"]')
    }

    async clickCartAndCheckout()
    {
        await this.$cart().click()
        await this.$proceedToCheckout().waitForDisplayed({ timeout: 5000 })
        await this.$proceedToCheckout().click()
        
    }
}

export default new ComparePage()
