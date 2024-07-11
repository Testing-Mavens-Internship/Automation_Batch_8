import Common from "./common.js";

class Payment extends Common{
    constructor(){
        super();
        this.$pHeader=()=>$(`//span[text()="paymentgateway"]`);
    }
}
export default new Payment();