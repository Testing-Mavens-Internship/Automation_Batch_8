import CommonPage from "./commonPage.js";

export class ProductDetailPage extends CommonPage{
    constructor(){
        super();
        this.$inStockHeader=()=>$(`//div[@class="stock available"]`);
        this.$$allSizeOption=()=>$$(`//div[@class="swatch-option text"]`);
        this.$sizeOption=(index)=>$(`(//div[@class="swatch-option text"])[${index}]`)
        this.$colorOption=(index)=>$(`//div[@class="swatch-option color"][${index}]`);
        this.$$allColorOption=()=>$$(`//div[@class="swatch-option color"]`)
        this.$quantityOption=()=>$(`//input[@id="qty"]`);
        this.$addToCartButton=()=>$(`//button[@id="product-addtocart-button"]`);
        this.$addedToCartMsg=()=>$(`//div[@class="message-success success message"]`);
        this.$addToCompareOption=()=>$(`//a[@data-role="add-to-links"]`);
        this.$addToCompareMsg=()=>$(`//div[text()="You added product Beaumont Summit Kit to the "]`);
        this.$lastSkuValue=()=>$(`//div[@itemprop="sku"]`);
        this.$lastProductDetail=()=>$(`//div[@id="description"]`);
        this.$sizeErrorMsg=()=>$(`//div[@id="super_attribute[143]-error"]`);
        this.$colorErrorMsg=()=>$(`//div[@id="super_attribute[93]-error"]`);
        this.$$allColorOptionFirstProduct=()=>$(`//div[@class="swatch-option text"]`);
        this.$colorOptFirstProduct=(index)=>$(`(//div[@class="swatch-option text"])[${index}]`);
    }
    /**
     * storing the sku value of the last product in an array.
     */
    async storeLastSkuValue(){
        let productSku=await this.$lastSkuValue().getText();{
            return productSku;
        }
    }
    /**
     * storing the details of the last products in an array.
     */
    async storeLastProductDetails(){
        let lastProductDetails=await this.$lastProductDetail().getText();{
            return lastProductDetails;
        }
    }
    /**
     * Selecting the color of the last product.
     */
    async selectSize(){
        const size=await this.$$allSizeOption().length;
        await this.$sizeOption(size-2).click();
        //await this.$sizeOption().waitForClickable({timeout:5000,timeoutMsg:"Size not yet clicked"});
    }
    /**
     * Selecting the color of the last product.
     */
    async selectColor(){
        const color=await this.$$allColorOption().length;
        await this.$colorOption(color-2).click();
        //await this.$colorOption().waitForClickable({timeout:5000,timeoutMsg:"Color not yet clicked"});
    }
    /**
     * SElecting the quantity of the last product.
     */
    async selectQuantity(){
        await this.$quantityOption().clearValue();
        await this.$quantityOption().setValue("2");
    }
    /**
     * Adding the last product to the cart.
     */
    async addToCart(){
        await this.$addToCartButton().click();
        await this.$addToCartButton().waitForClickable({timeout:5000,timeoutMsg:"Button not yet clicked."})
        await this.$addedToCartMsg().waitForDisplayed({timeout:5000,timeoutMsg:"Message not yet displayed"})
    }
    /**
     * Adding the last product to the 'Add to compare' option.
     */
    async addToCompare(){
        await this.$addToCompareOption().click();
        await this.$addToCompareOption().waitForClickable({timeout:5000,timeoutMsg:"Option not yet clicked"});
        await this.$addToCompareMsg().waitForDisplayed({timeout:5000,timeoutMsg:"Message not yet displayed."})
    }
    /**
     * Adding the first product in the page into the cart without selecting color and size.
     */
    async addToCartFirstProduct(){
        await this.$addToCartButton().click();
        await this.$addToCartButton().waitForClickable({timeout:5000,timeoutMsg:"Button not yet clicked"})
       // await this.$sizeErrorMsg().waitForDisplayed({timeout:10000,timeoutMsg:"Error message not yet displayed."});
       // await this.$colorErrorMsg().waitForDisplayed({timeout:10000,timeoutMsg:"Error message not yet displayed."});
    }
    async selectColorFirstProduct(){
        let firstProductColor=await this.$$allColorOptionFirstProduct().length;
        await this.$colorOptFirstProduct(firstProductColor-1).click();
        
    }
}
export default new ProductDetailPage();