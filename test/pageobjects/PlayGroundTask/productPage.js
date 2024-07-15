class ProductPage {

    constructor()
    {
        this.$addToCart=(index)=> $(`(//button[text()="Add to Cart "])[${index}]`) 
        this.$$totalCount=()=> $$('(//button[text()="Add to Cart "])')
        this.$prodHeader=()=> $('//h1[text()="Products"]')
        this.$prod1=()=> $('(//button[text()="Add to Cart "])[1]')
        this.$buy1=()=> $('(//p[text()="1"])[1]')
        this.$prod2=()=> $('(//button[text()="Add to Cart "])[2]')
        this.$buy2=()=> $('//p[text()="2"]')
        this.$prod3=()=> $('(//button[text()="Add to Cart "])[3]')
        this.$buy3=()=> $('//p[text()="3"]')
        this.$buyNowIcon=()=> $('//p[text()="Buy Now"]')
    }

    async clickAddTocart()
    {
        let count=0
        for(let i=1; i<=3; i++)
        {
            await this.$addToCart(i).click()
            count=i
        }
        return count
    } 

    async clickBuyNow()
    {
        await this.$buyNowIcon().waitForDisplayed({timeout:5000})
        await this.$buyNowIcon().click()
    }

    // async addProd1()
    // {
    //     await this.$prod1().click()
    //     await this.$buy1().waitForDisplayed({timeout:5000})
    // }

    // async addProd2()
    // {
    //     await this.$prod2().click()
    //     await this.$buy2().waitForDisplayed({timeout:8000})
    // }

    // async addProd3()
    // {
    //     await this.$prod3().click()
    //     await this.$buy3().waitForDisplayed({timeout:5000})
    // }

}

export default new ProductPage()
