import Common from '../luma/common.js';

export class Products extends Common {
    constructor(){
        super();
            this.$productHeader=()=>$(`//h1[@class="page-title"]`);
            this.$$selectLastProducts=()=>$$(`//li[@class="item product product-item"]`);
            this.$selectLastProduct=(index)=>$(`(//li[@class="item product product-item"])[${index}]`);
            this.$lastProductName=(index)=>$(`//ol[@class="products list items product-items"]/li[${index}]//a[@class="product-item-link"]`);
            this.$FirstProduct=(index)=>$(`(//li[@class="item product product-item"])[${index}]`);
        
    }
    /**
     * To select last product
     */
    async selectLastProduct(){
        let index = await this.$$selectLastProducts().length;
        await this.$selectLastProduct(index).click();
    }
    /**
     * To select first product from the given set of products
     * @param {number} index 
     */
    async selectFirstProduct(index){
        await this.$FirstProduct(index).click();
    }


}

export default new Products();