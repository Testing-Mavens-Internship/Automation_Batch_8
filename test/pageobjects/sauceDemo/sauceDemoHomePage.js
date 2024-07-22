import Common from "./sauceDemoCommon.js";

class Home extends Common
{
    constructor()
    {
        super()
        this.$homePageHeader=()=>$('//span[@class="title"]')
        this.$selectBox=()=>$('//select[@class="product_sort_container"]')
        this.$highToLowOption=()=>$('//option[@value="hilo"]')
        this.$firstProductAfterSort=()=>$('//div[text()="Sauce Labs Fleece Jacket"]')
        this.$price=(amt)=>$(`(//div[@class="inventory_item_price"])[${amt}]`)
        this.$$pricelist=()=>$$('(//div[@class="inventory_item_price"])')
        this.$addToCartButton=()=>$('//button[@id="add-to-cart-sauce-labs-backpack"]')
        this.$removeButton=()=>$('//button[@name="remove-sauce-labs-backpack"]')
        
    }

    /**
     * Sort from high to low
     */
    async sortProduct()
    {
        let array=[]
        await this.$selectBox().click()
        await this.$highToLowOption().waitForDisplayed({timeout:5000,timeoutMsg:"Option is not displayed yet"})
        await this.$highToLowOption().click()
        await this.$firstProductAfterSort().waitForDisplayed({timeout:7000,timeoutMsg:"Product is not displayed yet"})
        let total=await this.$$pricelist().length;
        for(let i=1;i<=total;i++)
        {
            const text=await this.$price(i).getText()
            const cost=text.replace("$","")
            array.push(cost)
        }
        for(let j=0;j<array.length;j++)
        {
            if(array[j]>array[j+1])
            {
                return true
            }
            else
            {
                return false
            }
        }
        // console.log("aaaa",array)
    }

    /**
     * Click on add to cart button
     */
    async addProduct()
    {
        await this.$addToCartButton().click()
        // await this.$cartIcon().waitForClickable()
    }

    /**
     * 
     */
}
export default new Home()