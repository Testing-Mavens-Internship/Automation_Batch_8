import Common from "./common.js";

class Product extends Common
{
    constructor()
    {
        super()
        this.$$pdtcount=()=>$$(`//ol[@class="products list items product-items"]/li`) //11
        this.$lastpdt=(i)=>$(`//ol[@class="products list items product-items"]/li[${i}]`)
        this.$lastpdtvalidate=()=>$(`//span[text()='Beaumont Summit Kit']`)
        this.$firstpdtvalidate=()=>$(`//span[text()='Proteus Fitness Jackshirt']`)
        this.$size=()=>$(`//div[@id="option-label-size-143-item-168"]`)
        this.$color=()=>$(`//div[@id="option-label-color-93-item-58"]`)
        this.$qty=()=>$(`//input[@id="qty"]`)
        this.$addtocart=()=>$(`//button[@id="product-addtocart-button"]`)
        this.$success=()=>$(`//div[@data-ui-id="message-success"]`)
        this.$comparebtn=()=>$(`(//a[@class="action tocompare"]/span[text()='Add to Compare'])[1]`)
        this.$comparesuccess=()=>$(`//div[@data-ui-id="message-success"]/div`)
        this.$countt=()=>$(`(//span[text()='2'])[1]`)
        this.$error1=()=>$(`//div[@id="super_attribute[143]-error"]`)
        this.$error2=()=>$(`//div[@id="super_attribute[93]-error"]`)
        this.$color1=()=>$(`//div[@id="option-label-color-93-item-49"]`)
        this.$comparisonlist=()=>$(`//a[text()='comparison list']`)
    }
    async selectlastProduct()
    {
        // const count=await this.$$pdtcount().length
        await this.$lastpdt('last()').scrollIntoView()
        await this.$lastpdt('last()').click()
    }
    async selectfirstProduct()
    {
        await this.$lastpdt(1).click()   
    }
    async addtoCart()
    {
        await this.$size().click()
        await this.$color().click()
        await this.$qty().clearValue()
        await this.$qty().setValue("2")
        await this.$addtocart().click()
        await browser.pause(8000)
    }
    async addtoCart2()
    {
        await this.$size().click()
        await this.$color1().click()
        await this.$qty().clearValue()
        await this.$qty().setValue("1")
        await this.$addtocart().click()
    }
    async addtoCompare()
    {
        await this.$comparebtn().click()
        await browser.pause(8000)
    }
    async cartCount()
    {
        let txt=await this.$countt().getText()
        return txt
    }
    async addtoCartDirectly()
    {
        await this.$addtocart().click()
    }

    async compareProduct()
    {
        await this.$comparisonlist().click()
        let pdt1=await this.$firstpdtvalidate().getText()
        let pdt2=await this.$lastpdtvalidate().getText()
        if(pdt1==='Proteus Fitness Jackshirt' && pdt2==='Beaumont Summit Kit')
        {
            return true
        }
        else
        {
            return false
        }
    }
}
export default new Product()