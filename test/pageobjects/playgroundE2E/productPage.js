import CommonPage from "./commonPage.js";

class ProductPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$('//h1[text()="Products"]')
        this.$$cart=()=>$$('//div[@class="mt-4 flex gap-4"]/button[text()="Add to Cart "]')
        this.$count=()=>$('//p[contains(@class,"absolute top-1 right-2")]')
        this.$buyNow=()=>$('//p[text()="Buy Now"]')
    }
    async clickAddtoCart(){
        let count=3
        for (let i=1;i<=count;i++){
            await this.$$cart()[i].click();
        }
        return count;
    }
    async clickBuyNow(){
        await this.$buyNow().click();
    }
    async cartIcon(){
        await this.$header();
    }
}

export default new ProductPage();
