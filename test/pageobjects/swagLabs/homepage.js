import Common from "./common.js";

class Homepage extends Common{
    constructor(){
        super();
        this.$homepageHeader=()=>$(`//div[@class="app_logo"]`);
        this.$productList=()=>$(`//div[@class="inventory_list"]`);
        this.$sortList=()=>$(`//select[@class="product_sort_container"]`);
        this.$sortHighToLow=()=>$(`//option[@value="hilo"]`);
        this.$selectedSort=()=>$(`//span[@class="active_option"]`);
        this.$addToCart=()=>$(`//button[@id="add-to-cart-sauce-labs-fleece-jacket"]`);
        this.$addToCartRedButton=()=>$(`//button[@class="btn btn_secondary btn_small btn_inventory "]`);
        this.$cartIcon=()=>$(`//a[@class="shopping_cart_link"]`);
    }
    async sorting(){
        await this.$sortList().click();
        // await this.$sortHighToLow().moveTo();
        await this.$sortHighToLow().click();
        await browser.pause(5000)
    }
    async addingToCart(){
        await this.$addToCart().click();
    }
    async clickingOnCartIcon(){
        await this.$cartIcon().click();
    }

}
export default new Homepage();