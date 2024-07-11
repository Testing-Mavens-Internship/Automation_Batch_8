import CommonPl from "./pl_common.js";
class Product extends CommonPl{
    constructor(){
        super()
        this.$categorylist=()=>$(`//span[normalize-space()='Shop by Category']`)
        this.$selectingMobile=()=>$(`//input[@id='Mobiles']`)
        this.$addingToCart=(index)=>$(`(//div[@class='mt-4 flex gap-4']/button[normalize-space()='Add to Cart'])[${index}]`)
        this.$cartNum=()=>$(`//p[contains(@class,'absolute top-1 right-2')]`)
        this.$clickCart=()=>$(`//p[normalize-space()='Buy Now']`)
    }
    async clickShopByCategory(){
        this.$categorylist().click();
    }

    async selectMobile(){
        this.$selectingMobile().click();

    }

    async addingProductsToCart(){
        let count=3;
        for(let i=1;i<=3;i++){
            await this.$addingToCart(i).click();
         }
         return count;
         }
         async clickBuyNow(){
            await this.$clickCart().click();
         }
}
export default new Product();