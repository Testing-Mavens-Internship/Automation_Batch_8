import CommonPage from "./commonPage.js";

class ProdDetailsPage extends CommonPage {

    constructor()
    {
        super()
        this.$lastProdName=()=>$('//span[@itemprop="name"]')
        this.$lastProdSKU=()=>$('//div[@itemprop="sku"]')  //save
        this.$lastProdDetails=()=>$('//div[@class="product attribute description"]/div[@class="value"/p]')  //save

        this.$firstProdName=()=>$('//span[@itemprop="name"]')
        this.$firstProdSKU=()=>$('//div[@itemprop="sku"]')  //save
        this.$firstProdDetails=()=>$('//div[@class="product attribute description"]/div[@class="value"/p]')  //save
        //common
        this.$size=()=> $('//div[@id="option-label-size-143-item-167"]')
        this.$color=()=> $('//div[@id="option-label-color-93-item-56"]')
        this.$qty=()=> $('//input[@id="qty"]')
        this.$addToCart=()=> $('//button[@id="product-addtocart-button"]')
        this.$addToCartMsg=()=> $('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]')
        this.$addToCompare=()=> $('//a[@data-role="add-to-links"]')
        this.$addToCompareMsg=()=> $('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]')
        this.$cartValue=()=> $('')
        this.$sizeRequired=()=> $('//div[@id="super_attribute[143]-error"]')
        this.$colorRequired=()=> $('//div[@id="super_attribute[93]-error"]')
        this.$comparisonLink=()=> $('//a[@href="https://magento.softwaretestingboard.com/catalog/product_compare/"]')
    }

    async addProdToCart()
    {
        
        await this.$size().click()
        await this.$color().waitForDisplayed({ timeout: 5000 })
        await this.$color().click()
        await this.$qty().waitForDisplayed({ timeout: 5000 })
        await this.$qty().clearValue()
        await this.$qty().waitForDisplayed({ timeout: 5000 })
        await this.$qty().setValue("2")
        await this.$addToCart().waitForDisplayed({ timeout: 5000 })
        await this.$addToCart().click()
        await this.$addToCartMsg().waitForDisplayed({ timeout: 5000 })
    }

    async addProdToCompare()
    {
        await this.$addToCompare().click()
        await this.$addToCompareMsg().waitForDisplayed({ timeout: 5000 })
    }

    async directAddToCart()
    {
        await this.$addToCart().click()
    }

    async clickComparisonLink()
    {
        await this.$comparisonLink().waitForDisplayed({ timeout: 5000 })
        await this.$comparisonLink().click()
    }
}

export default new ProdDetailsPage()
