import Common from "./ep_common.js";

class Productmodal extends Common
{
    constructor()
    {
        super()
        this.$hoverimg=()=>$(`//div[@id="entry_212408"]/div/div[1]/div/div[1]/div[1]/a/descendant::img[1]`)
        this.$shoppingcart=()=>$(`//i[@class="fas fa-shopping-cart"]`)
        this.$favorite=()=>$(`//i[@class="fas fa-heart"]`)
        this.$eye=()=>$(`//i[@class="fas fa-eye"]`)
        this.$compare=()=>$(`//i[@class="fas fa-sync-alt"]`)
        this.$buybtn=()=>$(`//button[@class="btn btn-cart cart-42"]`)
        this.$buyvalidate=()=>$(`//h1[text()='Apple Cinema 30"']`)
        this.$size=()=>$(`//select[@id="input-option231-212958"]/option[normalize-space()='Medium (-$28.80)']`)
        this.$sizevalidate=()=>$(`//h3[text()='$93.20']`)
        this.$addtoCart=()=>$(`//button[text()='Add to Cart']`)
        this.$toastmsg=()=>$(`//div[@class="toast-body"]/div/p[text()='Success: You have added ']`)
        this.$cart=()=>$(`(//div[@class="cart-icon"]/parent::a)[1]`)
        this.$cartvalidate=()=>$(`//a[text()='Apple Cinema 30...']`)
    }
    async hoverOverproduct()
    {
        await this.$hoverimg().moveTo()
    }

    async buy()
    {
        await this.$buybtn().waitForDisplayed({timeout:10000})
        await this.$buybtn().click()
    }
    async selectSize()
    {
        await this.$size().waitForDisplayed({timeout:10000})
        await this.$size().click()
    }
    async addtoCart()
    {
        await this.$addtoCart().waitForDisplayed({timeout:10000})
        await this.$addtoCart().click()
    }
    async gotoCart()
    {
        await this.$cart().waitForDisplayed({timeout:10000})
        await this.$cart().click()
    }
}
export default new Productmodal()