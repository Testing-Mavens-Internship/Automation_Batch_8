import Common from "./pg_commonpage.js";

class Product extends Common
{
    constructor()
    {
        super()
        this.$pdtheader=()=>$(`//h1[text()='Products']`)
        this.$$products=()=>$$(`//div[@class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6']/div/div/child::div[2]/div/h2`)
        this.$addtoCart=(index)=>$(`(//div[@class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6']/div/div/child::div[2]/child::div[2]/button[text()='Add to Cart '])[${index}]`)
        this.$buynow=()=>$(`(//a[@href="/cart"])[2]`)
        this.$qty1=()=>$(`(//span[text()='+'])[1]`)
        this.$qty2=()=>$(`(//span[text()='+'])[2]`)
    }
    async addtoCart()
    {
        let count=0
        for(let i=1;i<=3;i++)
        {
            await this.$addtoCart(i).click()   //parameterize and pass index value
            count++
        }
        console.log("Count: ",count)
        return count
    }
    async clickbuynow()
    {
        await this.$buynow().click()
    }
    async increaseQty()
    {
        await this.$qty1().click()
        await this.$qty2().click()
    }
}
export default new Product()