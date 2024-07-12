import Common from '../playgroundAssignment/common.js'

export class Products extends Common {
    constructor(){
        super();
        this.$productsHeader=()=>$('//h1[text()="Products"]');
        this.$products=(index)=>$(`(//button[text()="Add to Cart "])[${index}]`);
        this.$buyNowCount=()=>$('//p[contains(@class,"absolute top-1")]');
    }
    
    async addProduct(){
        let count=3;
        for(let i=1; i<=count; i++){
            await this.$products(i).click();
        
     }
     return count;    
    }

    async clickBuyNow(){
        await this.$buyNowCount().click();
    }


}
export default new Products();