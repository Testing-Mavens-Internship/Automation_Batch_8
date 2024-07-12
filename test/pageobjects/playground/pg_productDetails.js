import CommonPage from "./pg_commonPage.js";
class ProductDetails extends CommonPage{
    constructor(){
        super();
        this.$addToCart=()=>$(`//button[text()="Add to Cart"]`)
    }
    clickAddtocart(){

    }
    clickBuyNow(){

    }
}
export default new ProductDetails();