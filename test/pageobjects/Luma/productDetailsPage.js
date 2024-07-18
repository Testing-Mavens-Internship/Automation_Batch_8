import Common from "./commonPage.js";
import landingPageObj from "./landingPage.js";
import productComparePageObj from "./productComparePage.js";

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
        this.$comparisonList=()=>$(`//a[text()="comparison list"]`);
        this.iconCount = 0;
    }

    // async addToCartLastProduct() {
        
    //         const getSkuId = await this.$skuid().getText();
    //         const getProductName = await this.$productName().getText();
    //         const getProductDesc = await this.$productSpec(1).getText();
    //         const getProductChars = await this.$productSpec(2).getText();
    //         // let iconCount = 0;
    //         const qnty = 2;

    //         const productDetailsObject = {
    //             productName: getProductName,
    //             productSkuId: getSkuId,
    //             productDesc: getProductDesc,
    //             productChars: getProductChars
    //         };

    //         this.Productdetails.push(productDetailsObject);
    //         await this.$productSize().click();
    //         await this.$productColor().click();
    //         await this.$productQuantity().setValue(qnty);
    //         await browser.pause(6000);
    //         console.log("Array///=>", Productdetails);
    //         await this.$submitButton().click();
    //         await this.$successPopup().waitForDisplayed();
    //         this.iconCount+=qnty;

    //     }

    /**
     * Method to  add the product to compare.
     */

    async addToCompare() {
        await this.$addToCompare().click();
        await this.$successPopup().waitForDisplayed();
    }

    /**
     * Method to select men's Jacket
     */
    async selectjacket() {
        await this.$logo().click();
        await landingPageObj.$logo().waitForDisplayed();
        await landingPageObj.selectCategory();
    }

    /**
     * Method to verify the user can't add the product to cart without selecting the size and color.
     */
    async addToCartFirstProductWithoutfilters() {
        await this.$submitButton().click();
        await this.$requiredFieldErrorMsg(1).waitForDisplayed();
    }
    // async addToCartFirstProduct() {
    //     this.addToCartLastProduct();
    // }

    /**
     * Method to add the first product to compare list.
     */
    async addToCompareFirstProduct() {
        this.addToCompare();
        await this.$comparisonList().click();
        await productComparePageObj.$productCompareHeader().waitForDisplayed();
    }

    /**
     * Method to add the last product to cart.
     */
    async addToCartLastProduct() {
        const productDetailsObject = await this.getProductDetails();
        this.Productdetails.push(productDetailsObject);
        
        await this.$productSize().click();
        await this.$productColor().click();
        await this.$productQuantity().setValue(2);
        await browser.pause(6000);
        console.log("Array///=>", this.Productdetails);
        await this.$submitButton().click();
        await this.$successPopup().waitForDisplayed();
        this.iconCount += 2;
    }

    /**
     * Method to add the first product to cart.
     */
    async addToCartFirstProduct() {
        const productDetailsObject = await this.getProductDetails();
        this.Productdetails.unshift(productDetailsObject); 

        await this.$productSize().click();
        await this.$productColor().click();
        await this.$productQuantity().setValue(1); 
        await browser.pause(6000);
        console.log("Array///=>", this.Productdetails);
        await this.$submitButton().click();
        await this.$successPopup().waitForDisplayed();
        this.iconCount += 1;
    }

    /**
     * Method to get the product details.
     * @returns {Promise<{productName: string, productSkuId: string, productDesc: string, productChars: string}>}
     */
    async getProductDetails() {
        const getSkuId = await this.$skuid().getText();
        const getProductName = await this.$productName().getText();
        const getProductDesc = await this.$productSpec(1).getText();
        const getProductChars = await this.$productSpec(2).getText();

        return {
            productName: getProductName,
            productSkuId: getSkuId,
            productDesc: getProductDesc,
            productChars: getProductChars
        };
    }

    /**
     * 
     * @returns {Promise<{productName: string, productSkuId: string, productDesc: string, productChars: string}[]>}
     */
    async passProductDetailsArray() {
        return this.Productdetails;
    }

}export default new Productdetails();
