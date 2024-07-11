import common from "./pg_commonpage.js";
class Addtocart extends common
{
    constructor()
    {
        super();
        this.$buy=()=>$('//button[text()="Proceed to Checkout"]');
    }
    async buyclk()
    {
        
    }
}
export default new Addtocart();