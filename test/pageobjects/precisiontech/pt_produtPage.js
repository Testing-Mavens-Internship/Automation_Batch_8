import CommonPage from "./pt_commonPage.js";

class ProductPage extends CommonPage{
    constructor(){
        super();
        this.$productHeader=()=>$(`//h1[text()="Products"]`)
    }
    async productsHeader(){
        await this.$productHeader().waitForDisplayed({timeout:6000})
    }
}
export default new ProductPage();