import commonPage from "./commonPage.js";
import comparePage from "./comparePage.js";
class ProductPage extends commonPage{
    constructor(){
        super();
        this.$header=()=>$(`//span[@itemprop="name"]`)
        this.$$sizecount=()=>$$(`//div[@class="swatch-option text"]`)
        this.$size=(index)=>$(`(//div[@class="swatch-option text"])[${index}]`)
        this.$$colourcount=()=>$$(`//div[@class="swatch-option color"]`)
        this.$colour=()=>$(`//div[@class="swatch-option color"]`)
        this.$quantityBox=()=>$(`//input[@name="qty"]`)
        this.$skuValue=()=>$(`//div[@itemprop="sku"]`)
        this.$$description=()=>$$(`//div[@class="value"]//p`)
        this.$addCartButton=()=>$(`//button[@title="Add to Cart"]`)
        this.$addCartNotification=()=>$(`//a[text()="shopping cart"]/ancestor::div[@role="alert"]`)
        this.$addtoCompare=()=>$(`//div[@class="product-info-main"]//a[@class="action tocompare"]`)
        this.$comparisonAltert=()=>$(`//a[text()="comparison list"]/ancestor::div[@role="alert"]`)
        this.$cartCount=()=>$(`//span[@class="counter-number"]`)
        this.$sizeError=()=>$(`//div[@id="super_attribute[143]-error"]`)
        this.$colourError=()=>$(`//div[@id="super_attribute[93]-error"]`)
        this.$comparelist=()=>$(`//a[text()="comparison list"]`)
        
        
    }

    async changeSize(){
        let sizeCount=await this.$$sizecount().length
        await this.$size(sizeCount-2).click()
        
    }

    async changeColour(){
        let colourCount=await this.$$colourcount().length
        await this.$colour(colourCount-2).click()
    }

    async changeQuantity(qty){

        await this.$quantityBox().clearValue()
        await this.$quantityBox().setValue(qty)
    }
    async storeName(){
        let storeName=await this.$header().getText()
        return storeName
    }
    async storeSku(){
        let storeSku=await this.$skuValue().getText()
        return storeSku
    }
    async storedescription(){
        const paragraphs = await this.$$description().map(async (element) => await element.getText());
        const combinedText = paragraphs.join(' ');
        return combinedText
    }

    async addToCartSuccess(){
        await this.$addCartButton().click()
        await this.$addCartNotification().waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "Header is not visible"
        })
    }
    async addToCartFailed(){
        await this.$addCartButton().click()
        await this.$sizeError().waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "Header is not visible"
        })
    }
    async cartNum(){
        let cartCount=parseInt(await this.$cartCount().getText())
        return cartCount
    }
    async addToCompare(){
        await this.$addtoCompare().click()
        await this.$comparisonAltert().waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "Header is not visible"
        })
    }
    async clickCompareList(){
        await this.$comparelist().click()
        await comparePage.$compareHeader().waitForDisplayed({
            timeout: 5000,
            timeoutMsg: "Header is not visible"
        })
    
    }
}

export default new ProductPage();