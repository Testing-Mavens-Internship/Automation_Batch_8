class cartPage extends basePage {
    constructor() {
        super()

        this.$checkout = () => $(`//button[text()="Proceed to Checkout"]`)

    
    }
   async  clickCheckout(){
        await this.$checkout().click()
}
}
export default new cartPage();