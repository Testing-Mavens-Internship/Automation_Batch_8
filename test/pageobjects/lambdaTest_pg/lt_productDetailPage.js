class productDetail extends commonPage {
    constructor() {
        super();
        this.$header = () => $(`///span[text()="Brand:"]`);
        this.$sizeDropdown = () => $(`//div[@id="entry_212942"]//select[@class="custom-select"]`);
        this.$firstSize = () => $(`//select[@id="input-option231-212958"]//option[2]`);
        this.$addToCart = () => $(`//button[@class="text btn btn-md btn-secondary btn-block btn-cart button-cart cart-42"]`);
    }

/**
 * 
 */
    async selectSize() {
        await this.$sizeDropdown().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        await this.$sizeDropdown().click();
        await this.$firstSize().click();
    }


    async addToCart() {
        await this.$addToCart().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        await this.$addToCart().click();
    }
}

export default new productDetail()