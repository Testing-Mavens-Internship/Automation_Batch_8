import Common from "./common.js";

class Cart extends Common
{
    constructor()
    {
        super()
        this.$cart=()=>$(`//a[@class="action showcart"]`)
        this.$checkout=()=>$(`//button[@id="top-cart-btn-checkout"]`)
    }
    async checkout()
    {
        await this.$cart().click()
        await this.$checkout().click()
    }
}
export default new Cart()