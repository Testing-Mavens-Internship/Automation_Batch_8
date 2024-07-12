import basePage from "./common.js";

class cartPage extends basePage {
    constructor() {
        super()
        this.$header=()=>$('//h1[@class="cart__empty-text"]')
        this.$shoppingButton=()=>$('//a[@class="button"]')}

    async clickCheckout() {
        await this.$shoppingButton().click()
    }

    async
    }
    export default new cartPage()