import Common from "./common.js";

class ProductDetails extends Common{
    constructor(){
        super();
        this.$addToCart=()=>$(`//button[text()="Add to Cart"]`);
        this.$buyNow=()=>$(`//p[text()="Buy Now"]`);
    }
    async addtocart(){
        await this.$addToCart().click();
    }
    async buyNow(){
        await this.$buyNow().click();
    }
}
export default new ProductDetails();