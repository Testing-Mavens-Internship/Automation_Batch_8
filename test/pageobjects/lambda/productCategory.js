import Common from "./common.js";

class ProductCategory extends Common{
    constructor(){
        super()
        this.$priceLabel=()=>$(`(//div[normalize-space()="Price"])[2]`);
        this.$minPrice=()=>$(`(//input[@name="mz_fp[min]"])[2]`);
        this.$maxPrice=()=>$(`(//input[@name="mz_fp[max]"])[2]`);
        this.$sortOption=()=>$(`//select[@id="input-sort-212403"]`);
        this.$priceLowToHigh=()=>$(`(//option[text()="Price (Low > High)"])[2]`);
        this.$$priceCount=()=>$(`//span[@class="price-new"]`);
        this.$exactPrice=(index)=>$(`//span[@class="price-new"][${index}]`)
    }
    async setMinMax(min,max){
        await this.$minPrice().setValue(min);
        await this.$maxPrice().setValue(max);
    }
    async sortPriceLowToHigh(){
        await this.$sortOption().click();
        await this.$priceLowToHigh().click();

        let prices = [];
        let priceElements = await this.$$priceCount().length;
            for(let i=1;i<=priceElements;i++){
            let price= await this.$exactPrice(i).getText();
            let removeDollar = price.replace('$', '');
            let pricee= parseFloat(removeDollar);
            prices.push(pricee);
        }

        return prices;
        
    }
}
export default new ProductCategory()