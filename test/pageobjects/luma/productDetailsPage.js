import Common from '../luma/common.js';

export class ProductDetails extends Common {
    constructor(){
        super();
        this.$productDetailsHeader=()=>$(`//span[@data-ui-id="page-title-wrapper"]`);
        this.$productName=()=>$(`//span[@itemprop="name"]`);
        this.$skuValue=()=>$(`//div[@itemprop="sku"]`);
        this.$$description=()=>$$(`//div[@class="value"]//p`);
        this.$$sizecount=()=>$$(`//div[@class="swatch-option text"]`);
        this.$size=(index)=>$(`(//div[@class="swatch-option text"])[${index}]`);
        this.$$colourcount=()=>$$(`//div[@class="swatch-option color"]`);
        this.$colour=()=>$(`//div[@class="swatch-option color"]`);
        this.$quantityBox=()=>$(`//input[@name="qty"]`);
        this.$selectSize=(size)=>$(`//div[@option-label="${size}"] `);
        this.$selectColor=(color)=>$(`//div[@option-label="${color}"] `);  
        this.$setQuantity=()=>$(`//input[@class="input-text qty"]`);
        this.$addToCartButton=()=>$(`//button[@class="action primary tocart"]`);
        this.$addToCartNotification=()=>$(`//div[@data-ui-id="message-success"]`);
        this.$addToCompare=()=>$(`//a[@data-role="add-to-links"]/span[text()="Add to Compare"]`);
        this.$addToCompareNotification=()=>$(`//div[@data-ui-id="message-success"]`);
        this.$sizeAlertMessage=()=>$(`//div[@id="super_attribute[143]-error"]`);
        this.$colorAlertMessage=()=>$(`//div[@id="super_attribute[93]-error"]`);
        this.$cartCount=()=>$(`//span[@class="counter-number"]`);
        this.$comparelist=()=>$(`//a[text()="comparison list"]`)
    }
    /**
     * To store the product name
     * @returns string
     */
    async storeName(){
        let storeName=await this.$productName().getText()
        return storeName
    }
    /**
     * To store the skuValue
     * @returns number
     */
    async storeSku(){
        let storeSku=await this.$skuValue().getText()
        return storeSku
    }/**
     * To store the product description
     * @returns string
     */
    async storedescription(){
        const paragraphs = await this.$$description().map(async (element) => await element.getText());
        const combinedText = paragraphs.join(' ');
        return combinedText
    }
    /**
     * To set size of a product
     * @param {string} size 
     */
    async setSize(size){
        await this.$selectSize(size).click();
    }
    /**
     * To set color of a product
     * @param {string} color 
     */
    async setColor(color){
        await this.$selectColor(color).click();
    }
    /**
     * To set Quantity of a product
     * @param {number} qty 
     */
    async setQuantity(qty){
        await this.$setQuantity().setValue(qty);
    }
    /**
     * To click add to cart
     */
    async clickAddtoCart(){
        await this.$addToCartButton().click();
        await this.$addToCartNotification().waitForDisplayed({timeout: 5000});
    }
    /**
     * To click add to compare
     */
    async clickAddtoCompare(){
        await this.$addToCompare().click();
    }
    /**
     * To click add to cart without setting size and color
     */
    async clickAddToCartWithoutValues(){
        await this.$addToCartButton().click();
        await this.$sizeAlertMessage().waitForDisplayed({timeout: 5000});
        await this.$colorAlertMessage().waitForDisplayed({timeout: 5000});
    }
    /**
     * To change size of the product
     */
    async changeSize(){
        let sizeCount=await this.$$sizecount().length
        await this.$size(sizeCount-2).click()
        
    }
    /**
     * To change color of the product
     */
    async changeColour(){
        let colourCount=await this.$$colourcount().length
        await this.$colour(colourCount-2).click()
    }
    /**
     * To change quantity of the product
     * @param {number} qty 
     */
    async changeQuantity(qty){

        await this.$quantityBox().clearValue()
        await this.$quantityBox().setValue(qty)
    }
    /**
     * To get cart value
     * @returns number
     */
    async cartNum(){
        let cartCount=parseInt(await this.$cartCount().getText())
        return cartCount
    }
    /**
     * To add product to add to compare
     */
    async addToCompare(){
        await this.$addToCompare().click()
        await this.$addToCompareNotification().waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "Header is not visible"
        })
    }
    /**
     * To click on compare list
     */
    async clickCompareList(){
        await this.$comparelist().click()
        await comparePage.$compareHeader().waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "Header is not visible"
        })
    
    }


}
export default new ProductDetails();