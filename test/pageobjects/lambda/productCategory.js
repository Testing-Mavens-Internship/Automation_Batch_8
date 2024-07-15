import Common from "./common.js";

class ProductCategory extends Common{
    constructor(){
        super()
        this.$priceLabel=()=>$(`(//div[normalize-space()="Price"])[2]`);
        this.$minPrice=()=>$(`(//input[@name="mz_fp[min]"])[2]`);
        this.$maxPrice=()=>$(`(//input[@name="mz_fp[max]"])[2]`);
        this.$sortOption=()=>$(`//select[@id="input-sort-212403"]`);
        this.$priceLowToHigh=()=>$(`(//option[text()="Price (Low > High)"])[2]`);
    }
    async setMinMax(min,max){
        await this.$minPrice().setValue(min);
        await this.$maxPrice().setValue(max);
    }
    async sortPriceLowToHigh(){
        await this.$sortOption().click();
        await this.$priceLowToHigh().click();
    }
}
export default new ProductCategory()