import CommonPage from "./commonPage.js";
class ProductPage extends CommonPage{
    constructor(){
        super();
        this.$productHeader=()=>$('//span[@class="base"]');
        this.$sku=()=>$('//div[@class="product attribute sku"]//div');
        this.$size=(size)=>$(`//div[@option-label="${size}"]`);
        this.$color=(color)=>$(`//div[@option-label="${color}"]`);
        this.$quantity=()=>$(`//input[@id="qty"]`);
        this.$addToCart=()=>$('//button[@title="Add to Cart"]');
        this.$addToCompare=()=>$('(//span[text()="Add to Compare"])[1]');
        this.$success=()=>$('//div[@role="alert"]')
        this.$sizeAlert=()=>$('//div[@id="super_attribute[143]-error"]');
        this.$colorAlert=()=>$('//div[@id="super_attribute[93]-error"]');
        this.$comparison=()=>$('//a[text()="comparison list"]')
        
    }
    /**
     * to get the header of the product
     * @returns header
     */
    async getHeader(){
        let header=await this.$productHeader().getText();
        return header;
    }
    /**
     * get Sku for Products
     * @returns sku
     */
    async getSkuProduct(){
        
        let sku=await this.$sku().getText();
        return sku
    }
    /**
     * select size
     * @param {string} size 
     */

    async selectSize(size){
       
        await this.$size(size).click();
        await this.$productHeader().waitForDisplayed({timeout:5000, timeoutMsg: "Header hoodies is not visible"});
    }
    /**
     * select color
     * @param {string} color 
     */

    async selectColor(color){
        
        await this.$color(color).click();
        await this.$addToCart().waitForDisplayed({timeout:5000, timeoutMsg: "Header is not visible"});
    } 
    /**
     *enter quantity
     * @param {number} quantity 
     */
    async enterQuantity(quantity){
        
        await this.$quantity().setValue(quantity);
        await this.$addToCart().waitForDisplayed({timeout:5000, timeoutMsg: "Header hoodies is not visible"});
    }
    /**
     * add the product into the cart
     */
    async addToCart(){
        
        await this.$addToCart().click();
        await this.$success().waitForDisplayed({timeout:10000, timeoutMsg: "Header is not visible"});
        
    }
    /**
     * add the product to compare
     */
    async addToCompare(){
        await this.$closePopUp().click();
        await this.$addToCompare().click();
        await this.$success().waitForDisplayed({timeout:10000, timeoutMsg: "Header is not visible"});
    }
    /**
     * click on the comparison
     */
    async ClickComparisonList(){
        await this.$comparison().click();
    }
    /**
     * adding product without selecting size and color
     */
    async addWithoutsizeColor(){
        await this.$addToCart().click();
        await this.$sizeAlert().waitForDisplayed({timeout:5000,timeoutMsg:'Header not displayed'})
    }
}
export default new ProductPage();