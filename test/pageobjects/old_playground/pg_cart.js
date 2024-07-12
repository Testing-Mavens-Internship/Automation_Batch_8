// import { $ } from '@wdio/globals'
import Common from "./pg_common.js";

class Cart extends Common{
    constructor(){
        super()
        this.$checkout=()=>$(`//button[text()='Proceed to Checkout']`)
    }
    proceedtoCheckout()
    {

    }
}
export default new Cart()