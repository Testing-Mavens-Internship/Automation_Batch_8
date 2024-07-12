import basePage from "./commonPage.js";

class shopPage extends basePage {
    constructor() {
        super();
        this.$header = () => $('//h1[normalize-space()="Products"]');
        this.$shopCategory = () => $('//span[normalize-space()="Shop by Category"]/parent::div/parent::div');
        this.$mobileCatregory = () => $('//input[@id="Mobiles"]');
        this.$xiaomi14=()=>$('//h2[normalize-space()="Xiaomi Mi 12"]')
        this.$$addCart=()=>$$(`//button[contains(@class, 'flex') and contains(@class, 'items-center') and  text()="Add to Cart "]`)
        this.$cartNum=()=>$('//p[@class="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold"]')
        this.$buynow=()=>$('//p[text()="Buy Now"]')
        this.$productcount=()=>$(`//p[text()="Buy Now"]/following-sibling::p`);
    }

    async clickShopCategory() {
        await this.$shopCategory().click()
    }

    async clickMobileCategory() {
        await this.$mobileCatregory().click()
    }

    async clickaddCart() {
        let count = 0;
        for (let product = 1; product < 4; product++) {
            await this.$$addCart()[product].click()
            count+=1;
        }
        return count;
    }

    async clickBuyNow() {
        await this.$buynow().click()
    }
}
export default new shopPage()