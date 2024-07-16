import Common from "./pt_commonPage.js";

class Product extends Common{
    constructor(){
        super()
        this.$productHeader=()=>$(`//h1[@class='collection-hero__title']`)
        this.$clickSort=()=>$(`//select[@id="SortBy"]`)
    }
    async checkProductHeader(){
        await this.$productHeader();
    }

    async clickOnSortBy(){
        await this.$clickSort().click();
        
    }
}
export default new Product();