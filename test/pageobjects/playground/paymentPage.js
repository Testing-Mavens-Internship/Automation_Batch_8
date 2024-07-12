class PaymentPage{
    constructor(){
        this.$pay=()=>this.$pay('//button[text()="Proceed to Checkout"]')
    }
    async checkHeader(){
await this.$pay().click()
    }
}
export default new PaymentPage();