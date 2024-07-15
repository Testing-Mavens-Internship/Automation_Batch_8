class ProductsDetailsPage {

    constructor()
    {
        //super()
        this.$addToCartBtn=()=> $('//button[text()="Add to Cart"]')
        this.$buyNowIcon=()=> $('//p[text()="Buy Now"]')
    }

    async addToCart()
    {
        await this.$addToCartBtn().click()
        await this.$buyNowIcon().click()
    }
}

export default new ProductsDetailsPage()
