import Common from "./pt_commonpage.js";

class Cart extends Common
{
    constructor()
    {
        super()
        this.$cart_header=()=>$(`//h1[text()='Your cart is empty']`)
        this.$continue_shopping=()=>$(`//h1[text()='Your cart is empty']/following-sibling::a`)
    }
    async continueShopping()
    {
        await this.$continue_shopping().click()
    }
}
export default new Cart()