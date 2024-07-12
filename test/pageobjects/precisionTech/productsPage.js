import basePage from "./common.js";

class productsPage extends basePage {
    constructor() {
        super();
        this.$header = () => $('//h1[text()="Products"]');
        this.$sortDropdown = () => $('//select[@class="facet-filters__sort select__select caption-large"]');
        this.$$products = () => $$('//h3[@class="card__heading h5"]');
    }

    async clickSortZA() {
        await this.$sortDropdown().waitForDisplayed({ timeout: 10000, timeoutMsg: "Dropdown still not displayed" });
        await this.$sortDropdown().selectByAttribute('value', 'title-descending');
        await browser.pause(5000); // Adjust the pause duration if needed to wait for sorting to complete
    }

    async checkSort() {
        const productElements = await this.$$products();
        const productNames = await Promise.all(productElements.map(async (element) => {
            return await element.getText();
        }));

        const sortedProductNames = [...productNames].sort().reverse();

        console.log('Product Names:', productNames);
        console.log('Sorted Product Names:', sortedProductNames);

        return productNames.every((name, index) => name === sortedProductNames[index]);
    }
}

export default new productsPage();
