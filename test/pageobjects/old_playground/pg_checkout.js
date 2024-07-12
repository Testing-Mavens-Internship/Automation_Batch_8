// import { $ } from '@wdio/globals'
import Common from "./pg_common.js";

class Checkout extends Common{
    constructor(){
        super()
        this.paymentheader=()=>$(`//span[text()='paymentgateway']/ancestor::p/parent::div/h1`)
    }
    validatePaymentHeader()
    {

    }
}
export default new Checkout()