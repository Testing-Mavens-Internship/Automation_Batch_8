import common from "./pg_commonpage.js";
class payment extends common
{
    constructor()
    {
        super();
        this.$paymenttxt=()=>$('//button[text()="Proceed to Checkout"]');
    }
    async checkpaymenttext()
    {

    }
}
export default new payment();