import CommonPage from "./commonPage.js";

class JacketsPage extends CommonPage {

    constructor()
    {
        super()
        this.$jacketHeader=()=> $('//h1[@class="page-title"]/span[text()="Jackets"]')
        this.$$prodCount=()=> $$('//ol[@class="products list items product-items"]/li')
        this.$lastProd=(i)=> $(`//ol[@class="products list items product-items"]/li[${i}]`)
        this.$firstProd=()=> $(`//ol[@class="products list items product-items"]/li[1]`)
    }

    async lastProd()
    {
        const count=await this.$$prodCount().length
        await this.$lastProd(count).click()
    }

    async firstProd()
    {
        await this.$firstProd().waitForDisplayed({ timeout: 5000 })
        await this.$firstProd('first()').click()
    }
}

export default new JacketsPage()
