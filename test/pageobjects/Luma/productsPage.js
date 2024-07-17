import common from "./commonPage.js";
class Products extends common{
    constructor(){
        super();
        this.$productsHeader =()=>$(`//span[@data-ui-id="page-title-wrapper"]`);
        this.$lastProduct =()=>$(`(//div[@class="product-item-info"]//span[@class="product-image-wrapper"])[last()]`);
        this.$firstProduct =()=>$(`//ol[@class="products list items product-items"]/li[1]`);

        this.$productLabel =()=>$(`//li[@class="item product"]`);
    }
    async selectLastProduct(){
        this.$lastProduct().click();
    }

    async selectFirstProduct(){
        this.$firstProduct().click();
    }
}export default new Products();