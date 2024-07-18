import Common from "./lumaCommon.js";

class Lastproduct extends Common
{
    constructor()
    {
     super()
     this.$sizeforlastitem=()=>$('//div[@option-label="S"]')
     this.$colourforlastitem=()=>$('//div[@option-label="Red"]')
     this.$sizesuccess=()=>$('//div[@option-label="S" and @aria-checked="true"]')
     this.$coloursuccess=()=>$('//div[@option-label="Red" and @aria-checked="true"]')
     this.$qtyforlastitemselecteor=()=>$('//input[@type="number"]')
     this.$addtocartbtnforlast=()=>$('//button[@title="Add to Cart"]')
     this.$lastitemsuccessmsg=()=>$('//div[@data-ui-id="message-success"]')
     this.$addtocompareforlast=()=>$('//div[@class="product-addto-links"]/a[@class="action tocompare"]')
     this.$compareheaderforlast=()=>$('//a[contains(text(),"comparison list")]')
   
     
    }

    /**
     * Specification for product is selecting
     */
    async productspec()
    {
        await this.$sizeforlastitem().click();
        await this.$colourforlastitem().waitForClickable({timeout:5000,timeoutMsg:"Not clickable yet"})
        await this.$colourforlastitem().click()
        await this.$qtyforlastitemselecteor().clearValue();
        await this.$qtyforlastitemselecteor().setValue(2);
        await this.$addtocartbtnforlast().click()
        await this.$lastitemsuccessmsg().waitForDisplayed();
        // let namelast=await this.$selectedlastproductname().getText();
        // let skulast=await this.$selectedlastproductsku().getText();
        // let details=await this.$selectedlastproductdetails().getText();
    }

    /**
     * Add to cart
     */
    async addtocartlastobj()
    {
        await this.$addtocompareforlast().click();
        await this.$compareheaderforlast().waitForDisplayed({timeout:7000,timeoutMsg:"Header Not Displayed"})
    }

   
    

}
export default new Lastproduct()