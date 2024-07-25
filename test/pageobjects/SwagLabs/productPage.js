import Common from "./common.js";

class ProductPage extends Common {

    constructor()
    {
        super()
        this.$prodHeader=()=> $('//span[text()="Products"]')
        this.$sortOption=()=> $('//select[@class="product_sort_container"]')
        this.$highToLow=()=> $('//option[text()="Price (high to low)"]')
        this.$firstProdAddToCart=()=> $('(//button[@class="btn btn_primary btn_small btn_inventory "])[1]')
        this.$removeButton=()=> $('//button[text()="Remove"]')
        this.$cartIcon=()=> $('//a[@class="shopping_cart_link"]')
    }

    async sortProd()
    {
        await this.$sortOption().click()
        await this.$highToLow().waitForDisplayed({ timeout: 5000 })
        await this.$highToLow().click()
        await browser.pause(2000)
    }

    async validateSort()
    {

    }

    async addToCart()
    {
        await this.$firstProdAddToCart().click()
    }

    async clickCart()
    {
        await this.$cartIcon().click()
    }
}

export default new ProductPage()
