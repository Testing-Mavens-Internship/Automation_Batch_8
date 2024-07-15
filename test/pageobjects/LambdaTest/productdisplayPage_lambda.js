import CommmonLambda from "./common_lambda.js";
class ProductDisplayPage extends CommmonLambda{
    constructor(){
        super()
        this.$minimumPrice=()=>$(`(//div[@class="d-flex align-items-center"]/input[@name="mz_fp[min]"])[2]`)
        this.$maximumPrice=()=>$(`(//div[@class="d-flex align-items-center"]/input[@name="mz_fp[max]"])[2]`)
        this.$clickOnSort=()=>$(`//select[@id="input-sort-212403"]`)
        this.$selectLowtoHigh=()=>$(`//select[@id="input-sort-212403"]/option[normalize-space()="Price (Low > High)"]`)
        //this.$selectLowtoHigh=()=>$(`//select[@id="input-sort-212403"]/option[normalize-space()="Price (High > Low)"]`)
        this.$$price=()=>$$(`//span[@class="price-new"]`)
        this.$availabilityOfProduct=()=>$(`//div[@class="mz-filter-value"]/div//label[normalize-space()="In stock"]`)
        this.$appleIcon=()=>$(`//div[@class="custom-control custom-checkbox"]/label[@for="mz-fm-0-8"]`)
        this.$nameAtoZ=()=>$(`//select[@id="input-sort-212403"]/option[normalize-space()="Name (A - Z)"]`)
        this.$clearButton=()=>$(`//div[normalize-space()="Price"]/a[@class="mz-filter-reset"]`)
        this.$$appleProducts=()=>$$(`//h4[@class="title"]`)
        this.$Validatemenu=()=>$(`(//div[@class="product-action"])[1]`)
        this.$selectingFirstProduct=()=>$(`//a[@id="mz-product-grid-image-42-212408"]`)
        this.$eyeButton=()=>$(`//button[@class="btn btn-quick-view quick-view-42"]`)
        this.$ClickingSize=()=>$(`//select[@id="input-option231-212958"]`)
        this.$selectingSize=()=>$(`//option[normalize-space()="Medium (-$28.80)"]`)
        this.$selectingSize=()=>$(`//select[@id="input-option231-212958"]/option[normalize-space()="Medium (-$28.80)"]`)
        this.$addtocart=()=>$(`//div[@id="entry_212964"]/button`)
        this.$addToCartPopUp=()=>$(`//div[@id="notification-box-top"]`)

    }
    /**
     * Entering values in filter option
     */
    async filteringPrice(){
    await this.$minimumPrice().setValue("1008")
    await this.$maximumPrice().setValue("20000")
    }
    /**
     * clicking on Sort By option
     */
    async SortingPrice(){
        await this.$clickOnSort().click();
    }
    /**
     * Selecting Price low to high from Sort by option
     */
    async selectingPriceLowToHigh(){
        await this.$selectLowtoHigh().click();
    }

    /**
     * method to Clear Filtered price from filter option
     */
    async clearingFilteredPrice(){
        await this.$minimumPrice().clearValue();
        await this.$maximumPrice().clearValue();
    }
    /**
     * method to click on Instock checkbox
     */
    async clickOnInStock(){
        await this.$availabilityOfProduct().click();
    }
    /**
     * method to select Apple products 
     */
    async ClickOnapple(){
        await this.$appleIcon().click();
    }

    async SortingName(){
        await this.$clickOnSort().click();
        await this.$nameAtoZ().click();
    }
    async hoveringMouseToFirstProduct(){
        await this.$selectingFirstProduct().moveTo();
        await  this.$eyeButton().click();
    }

    async SelectingSizeOption(){
        await this.$ClickingSize().click();
        await this.$selectingSize().click();
    }
    async clickOnAddToCart(){
        await this.$addtocart().click();

    }

}
export default new ProductDisplayPage();