import CommonPage from "./commonPage.js";

export class ShopPage extends CommonPage{
    constructor(){
        super();
        this.$category=()=>$(`//span[text()="Shop by Category"]`);
        this.$item=()=>$(`//input[@id="Mobiles"]`);
        this.$product=()=>$(`//h2[text()="iPhone 13 Pro"]`);
        this.$profile=()=>$(`//p[text()="Profile"]`);
        this.$$products=()=>$$(`//button[text()="Add to Cart "]`);
        this.$buyNowNum=()=>$(`//p[contains(@class,"absolute top-1")]`)
        
    }
    async shopByCategory(){
        await this.$category().click();
        await this.$item().click();
    
    }
    async addToCart(){
        let count=3;
        for(let i=1;i<=count;i++){
            await this.$$products()[i].click();
        }
        return count;

    }
    async clickBuyNow(){
        await this.$buyNowNum().click();
    }

}
export default new ShopPage();