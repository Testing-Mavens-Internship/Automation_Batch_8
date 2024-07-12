import Common from "./pt_commonpage.js";

class Product extends Common
{
    constructor()
    {
        super()
        this.$pdtheader=()=>$(`//h1[text()='Products']`)
        this.$alphabetsort=()=>$(`//select[@id='SortBy']`)
        this.$alphabetsortoption=()=>$(`//select[@id='SortBy']/option[normalize-space()='Alphabetically, Z-A']`)
        this.$$products=()=>$$(`//h3[@class="card__heading h5"]/a`)
    }
    async clickSort()
    {
        await this.$alphabetsort().waitForClickable({timeout:10000})
        await this.$alphabetsort().click()
        await this.$alphabetsortoption().waitForDisplayed({timeout:10000})
        await this.$alphabetsortoption().click()
    }

    async getProducts()
    {
        let pdtarray=[]
        // let pdtlist= await this.$$products()
        for(let pdtlists in await this.$$products())
        {
            pdtarray.push(await pdtlists.getText())
            console.log(pdtarray)
        }
    return pdtarray
    }
}
export default new Product()