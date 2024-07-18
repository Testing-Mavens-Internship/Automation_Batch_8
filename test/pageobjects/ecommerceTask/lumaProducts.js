import Common from "./lumaCommon.js";

class Products extends Common
{
    constructor()
    {
        super()
        this.$productpageheader=()=>$('//span[@data-ui-id="page-title-wrapper"]')
        this.$$totalproductcount=()=>$$('(//a[@class="product-item-link"])')
        this.$lastitem=(index)=>$(`(//a[@class="product-item-link"])[${index}]`)
        this.$firstitem=()=> $(`(//a[@class="product-item-link"])[1]`);
        this.Productdetails=[]
        // this.Productdetailsobject={}
      
    }
    
    /**
     * Select last item 
     */
    async selectlastitem()
    {
        // let len=await this.$$totalproductcount().length;
        await this.$lastitem('last()').waitForClickable({timeout:10000})
        await this.$lastitem('last()').click()
        const getName=await this.$selectedproductname().getText();
        const getId=await this.$selectedproductsku().getText();
        const getdetailone=await this.$selectedproductdetails(1).getText();
        const getdetailtwo=await this.$selectedproductdetails(2).getText();
        const productdetailsobject={
            productname:getName,
            productSKUID:getId,
            productdesc:getdetailone,
            productchar:getdetailtwo
        }
        this.Productdetails.push(productdetailsobject);
        console.log("?????????????????????????????",this.Productdetails)
    }
    
    /**
     * Select first item
     */
    async selectfirstitem()
    {
        await this.$firstitem().waitForClickable({timeout:10000})
        await this.$firstitem().click()
    }
}
export default new Products()