class MobileCategoryPage{
    constructor(){
        this.$shop=()=>$(`//span[text()="shop"]`);
        this.$addToCartButton=(index)=>$(`(//button[text()="Add to Cart "])[${index}]`);
        this.$buyNowCount=()=>$(`//p[text()="3"]`);
        this.$productHeader=()=>$(`//h1[text()="Products"]`);
        this.$buyNowButton=()=>$(`//p[text()="Buy Now"]`);
    }
    async clickAddToCart(){
        let count=0;
        for(let i=1;i<=3;i++){
            await this.$addToCartButton(i).click();
            count=i;
        }
        return count
    }
    async clickBuyNowButton(){
        await this.$buyNowButton().click();
    }
}
export default new MobileCategoryPage()