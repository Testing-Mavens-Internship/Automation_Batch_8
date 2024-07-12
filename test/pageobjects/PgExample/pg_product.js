import Common from "../pg_commonpage.js";
class ProductPage extends Common{
    constructor(){
        super()
        this.$pSelect=() =>$(`//h2[text()="Asus ZenBook 14"]`)
        this.$cAddToCart=() =>$(`//div[@class='mt-4 flex flex-col justify-between']//button[@fdprocessedid="arms9o"]`)
        this.$cBuyNow =() =>$(`//p[text()='Buy Now']`)
    }
    async clickProduct() {
    
        await this.$pSelect().click();
    }

    async clickAddToCart() {
       await this.$cAddToCart().click();
    }

    async clickBuyNow() {
        (await this.$cBuyNow()).click();
        
    }
}
export default new ProductPage();