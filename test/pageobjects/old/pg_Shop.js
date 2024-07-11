import common from "./pg_commonpage.js";
class Shops extends common
{
    constructor()
    {
        super();
        this.$clrdropdownclk=()=>$('//span[text()="Shop by Color"]/following-sibling::*[local-name()="svg" and @viewBox="0 0 20 20"]');
        this.$clr=()=>$('//input[@type="checkbox" and @id="Blue"]')
        this.$item=()=>$('//h2[text()="Xiaomi Mi 12"]/parent::div/following-sibling::div/button[contains(text(),"Add to Cart")]');
        this.$navtocart=()=>$('//p[text()="Buy Now"]');
    }
    async setclr()
    {

    }
    async addclk()
    {

    }
    async cartclk()
    {

    }
}
export default new Shops();