import Common from "./commonPage.js";
import landingPageObj from "./landingPage.js";

class Productdetails extends Common {
    constructor() {
        super();
        this.Productdetails = [];
        this.ProductdetailsObject = {};
        this.$skuid = () => $(`//div[@class="product attribute sku"]//div[@class="value"]`);
        this.$productName = () => $(`//span[@data-ui-id="page-title-wrapper"]`);
        this.$productSpec = (index) => $(`(//div[@class="product attribute description"]//p)[${index}]`);
        this.$productSize = () => $(`//div[text()="S"]`);
        this.$productColor = () => $(`//div[@id="option-label-color-93-item-56"]`);
        this.$productQuantity = () => $(`//input[@id="qty"]`);
        this.$submitButton=()=>$(`//button[@id="product-addtocart-button"]`);
        this.$successPopup=()=>$(`//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]`);
        this.$addToCompare=()=>$(`//div[@class="product-social-links"]//span[text()="Add to Compare"]`);
        this.$logo = () => $(`//a[@class="logo"]`);
        this.$requiredFieldErrorMsg=(index)=>$(`(//div[@class="mage-error"])[${index}]`);
        this.iconCount = 0;
    }

    async addToCartLastProduct() {
        
            const getSkuId = await this.$skuid().getText();
            const getProductName = await this.$productName().getText();
            const getProductDesc = await this.$productSpec(1).getText();
            const getProductChars = await this.$productSpec(2).getText();
            // let iconCount = 0;
            const qnty = 2;

            const productDetailsObject = {
                productName: getProductName,
                productSkuId: getSkuId,
                productDesc: getProductDesc,
                productChars: getProductChars
            };

            this.Productdetails.push(productDetailsObject);
            await this.$productSize().click();
            await this.$productColor().click();
            await this.$productQuantity().setValue(qnty);
            await browser.pause(6000);
            console.log("Object/\/\/\/\=>", productDetailsObject);
            await this.$submitButton().click();
            await this.$successPopup().waitForDisplayed();
            this.iconCount+=qnty;

        }

    async addToCompare() {
        await this.$addToCompare().click();
        await this.$successPopup().waitForDisplayed();
    }

    async selectjacket() {
        await this.$logo().click();
        await landingPageObj.$logo().waitForDisplayed();
        await landingPageObj.selectCategory();
    }

    async addToCartFirstProductWithoutfilters() {
        await this.$submitButton().click();
        await this.$requiredFieldErrorMsg(1).waitForDisplayed();
    }


}export default new Productdetails();
