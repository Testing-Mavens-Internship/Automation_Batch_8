import Common from "./pg_commonpage.js";

class Cart extends Common
{
    constructor()
    {
        super()
        this.$$count=()=>$$(`//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"]`)  //3
        this.$total_price=()=>$(`//span[@class="font-bold tracking-wide text-lg font-titleFont"]`)
        this.$exactprice=(index)=>$(`(//div[@class="w-1/3 flex items-center font-titleFont font-bold text-lg"])[${index}]`)
        this.$reset=()=>$(`//button[text()='Reset cart']`)
        this.$cartmsg=()=>$(`//h1[text()='Your Cart feels lonely.']`)
        this.$continueshopping=()=>$(`//button[text()='Continue Shopping']`)
    }
    async getPrice()
    {
        let pricecount=0
        let limit=await this.$$count().length
        for(let i=1;i<=limit;i++)
        {
            let price=await this.$exactprice(i).getText()
            let r=price.replace('$','')
            let check=parseFloat(r)
            pricecount+=check
        }
        pricecount+=20;
        console.log("Price count -----------",pricecount)
        return pricecount
    }
    async getTotalPrice()
    {
        let a=await this.$total_price().getText()
        let b=a.replace('$','')
        let c=parseFloat(b)
        console.log("Total Price count -----------",c)
        return c
    }
    async resetCart()
    {
        await this.$reset().waitForClickable({timeout:3000})
        await this.$reset().scrollIntoView({ block: 'center', inline: 'center' })
        await this.$reset().click()
    }
    async continueShopping()
    {
        await this.$continueshopping().click()
    }
}
export default new Cart()