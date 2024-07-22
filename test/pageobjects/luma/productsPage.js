import CommonPage from "./commonPage.js";

export class ProductsPage extends CommonPage{
    constructor(){
        super();
        this.$jacketHeader=()=>$(`//h1[@class="page-title"]`);
        this.$lastProduct=()=>$(`(//li[@class="item product product-item"])[last()]`)
        this.$firstProduct=()=>$(`//li[@class="item product product-item"]`)
    
    }
    /**
     * To select the last product from the whole product page.
     */
    async selectLastProduct(){
        await this.$lastProduct().click();
        await this.$lastProduct().waitForClickable({timeout:5000,timeoutMsg:"Product not yet clicked."});
        await browser.pause(5000)
    }
    /**
     * To select the first product from the whole product page.
     */
    async selectFirstProduct(){
        await this.$firstProduct().click();
    }
}
export default new ProductsPage();