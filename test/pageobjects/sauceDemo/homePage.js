import CommonPage from "./commonPage.js";

class HomePage extends CommonPage {
    constructor() {
        super();
        this.$homePageHeader = () => $('//span[text()="Products"]');
        this.$sortDropdown = () => $('//select[@class="product_sort_container"]');
        this.$$productPrices = () => $$(`//div[@class="inventory_item_price"]`);
        this.$productPrice = (index) => $(`(//div[@class="inventory_item_price"])[${index}]`);
        this.$addToCartButton = () => $('//button[@id="add-to-cart-sauce-labs-backpack"]');
        this.$removeButton = () => $('//button[@id="remove-sauce-labs-backpack"]');
        this.$cartIcon = () => $('//a[@class="shopping_cart_link"]');
    }

    async sortProducts() {
        await this.$sortDropdown().selectByAttribute("value", "hilo");
        await browser.pause(3000);
        let sortedPrice = [];

        for (let i = 1; i <= (await this.$$productPrices()).length; i++) {
            let price = await this.$productPrice(i).getText();
            let modifiedPrice = price.replace("$", "");
            sortedPrice.push(parseFloat(modifiedPrice));
        }
        return sortedPrice[0] > sortedPrice[1];
    }

    async clickAddToCart() {
        await this.$addToCartButton().click();
        await this.$removeButton().waitForDisplayed({ timeout: 5000 });

        await browser.pause(1000);
        const color = await this.$removeButton().getCSSProperty('color');
        const colorValue = color.parsed.hex;
        return colorValue === '#e2231a';
    }

    async clickCartIcon() {
        await this.$cartIcon().click();
    }
}

export default new HomePage();
