// import { $ } from '@wdio/globals'
import Common from "./pg_common.js";

class Homepage extends Common{
    constructor(){
        super()
        this.$cartbtn=()=>$(`//button[contains(text(),'Add to Cart')]`)
        this.$buynow=()=>$(`//p[text()='Buy Now']/parent::div/div`)
    }
    addtoCart()
    {

    }
    buyNow()
    {

    }
}
export default new Homepage()