export default class Common
{
    constructor()
    {
        this.$selectedproductname=()=>$('//span[@itemprop="name"]')
            // this.$selectedlastproductsku=()=>$('//div[@itemprop="sku"]')
            // this.$selectedlastproductdetails=()=>$('//div[@class="product attribute description"]/div[@class="value"]/p')
            this.$selectedproductdetails=(det)=>$(`(//div[@class="product attribute description"]//p)[${det}]`);
            this.$selectedproductsku=()=>$(`//div[@class="product attribute sku"]//div[@class="value"]`);
            this.$cartclick=()=>$('//a[@class="action showcart"]')
            this.$cartinsidecount=()=>$('//span[@class="count"]')
            this.$closecart=()=>$('//button[@id="btn-minicart-close"]')
            this.$cartoutsidecount=()=>$('//span[@class="counter-number"]')
    }

    /**
     * To launch url
     */
    async loadurl()
    {
        await browser.maximizeWindow();
        await browser.url("https://magento.softwaretestingboard.com/")
    }

     /**
     * Count of products on cart icon validation
     */
     async cartcountvalidate()
     {
         await this.$cartclick().click();
         let count=await this.$cartinsidecount().getText()
         await this.$closecart().click()
         let newcount=await this.$cartoutsidecount().getText()
         if(count==newcount)
             {
             return true
             }
             else
             {
                 return false
             }    
         }
}