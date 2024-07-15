class CheckoutPage {

    constructor()
    {
        //super()
        this.$textVerify=()=> $('//div/h1[text()="Payment Gateway"]')
    }

    async verifyCheckoutText()
    {
        //verify text
    }

}

export default new CheckoutPage()
