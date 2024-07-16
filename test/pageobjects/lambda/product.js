import CommonPage from "./commonPage.js";
class Product extends CommonPage{
    constructor(){
        super();
        this.$product=()=>$('//div[@id="entry_212942"]');
        this.$size=()=>$('//option[@value="35"]');
        this.$select=()=>$('//select[@name="option[231]"]');
        this.$price=()=>$('//h3[@data-update="price"]');
        this.$addCart=()=>$('//button[@class="text btn btn-md btn-secondary btn-block btn-cart button-cart cart-42"]');
    }
    async selectSize(){
        await this.$select().click();
        await this.$size().click();
        await this.$addCart().click();
    }
   
}
export default new Product();