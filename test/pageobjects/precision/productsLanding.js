import Common from "../precision/common.js";

export class Products extends Common{
    constructor(){
        super();
        this.$products=()=>$('//h1[text()="Products"]')
        this.$clickSort=()=>$('//select[@id="SortBy"]/option[@value="title-descending"]')
        this.$sort=()=>$('//select[@id="SortBy"]')
    }

    async clickSort(){
        await this.$sort().click();
        await this.$clickSort().click();
    }
   
}
export default new Products();