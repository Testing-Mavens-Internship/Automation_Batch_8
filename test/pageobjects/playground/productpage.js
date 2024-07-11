import Common from "./common.js";
import cart from "./cart.js";
class ProductPage extends Common{
    constructor(){
        super();
        this.$products=(item)=> $(`(//button[contains(text(),"Add to Cart ")])[${item}]`);
        this.$buyNow=()=>$(`//p[text()="Buy Now"]`);
        this.$noOfItem=()=>$(`//p[text()="Buy Now"]/following-sibling::p`);
    }
    async clickAddToCart(){
        let count=0;
        for(let i=1;i<4;i++){
            await this.$products(i).click();
            count+=1;
        }
        return count;
    }
    async clickBuyNow(){
        await this.$buyNow().click();
        await cart.$cartHeader().waitForDisplayed({timeout:4000,timeoutMsg:"Cart page is not loading"})
    }
}
export default new ProductPage();