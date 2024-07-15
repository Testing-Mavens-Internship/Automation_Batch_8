class ProductsPage {

    constructor()
    {
        //super()
        this.$shopByColor=()=> $('//div/span[text()="Shop by Color"]')
        this.$selectBlue=()=> $('//input[@id="Blue"]')
        this.$selectPhone=()=>$('(//img[@class="w-full h-full object-contain"])[2]')
    }

    async clickShopByColor()
    {
        await this.$shopByColor().click()
        await this.$selectBlue().click()
    }

    async selectProduct()
    {
        await this.$selectPhone().click()
    }
}

export default new ProductsPage()
