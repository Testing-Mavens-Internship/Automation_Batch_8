import CommonPage from "./pgt_CommonPage.js";

class ProductPage extends CommonPage {

    constructor() {
        super();
        this.$pro1 = () => $('//h2[text()="iPhone 13 Pro"]/ancestor::div[@class="mt-4 flex flex-col justify-between"]//button[text()="Add to Cart "]');
        this.$pro2 = () => $('//h2[text()="Samsung Galaxy S22 Ultra"]/ancestor::div[@class="mt-4 flex flex-col justify-between"]//button[text()="Add to Cart "]');
        this.$pro3 = () => $('//h2[text()="Google Pixel 6 Pro"]/ancestor::div[@class="mt-4 flex flex-col justify-between"]//button[text()="Add to Cart "]');
        this.$buyNowIncrementIcon = () => $('//p[@class="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold"]');
    }

    async addProductToCart() {
        let count=0;
        const productNames = [this.$pro1(), this.$pro2(), this.$pro3()]; 
        for (const item of productNames) {
            await item.click();
            count ++;

        }
        return count;
    }

}

export default new ProductPage();
