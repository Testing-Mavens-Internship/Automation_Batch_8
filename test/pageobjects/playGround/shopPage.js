import basePage from "./commonPage.js";

class shopPage extends basePage {
    constructor() {
        super();
        this.$header = () => $('//h1[normalize-space()="Products"]');
        this.$shopCategory = () => $('//span[normalize-space()="Shop by Category"]/parent::div/parent::div');
        this.$mobileCatregory = () => $('//input[@id="Mobiles"]');
        this.$xiaomi14=()=>$('//h2[normalize-space()="Xiaomi Mi 12"]')
        this.$$addCart=()=>$$('//button[@class="flex items-center gap-2 px-4 py-2 bg-primeColor text-white rounded-lg shadow hover:bg-primeColor-dark transition-colors duration-300"]')
        this.$cartNum=()=>$('//p[contains(@class,"absolute top-1 right-2 ")]')
        this.$buynow=()=>$('//div[@class="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"]')
    }

    async clickShopCategory() {
        await this.$shopCategory().click()
    }

    async clickMobileCategory() {
        await this.$mobileCatregory().click()
    }

    async clickaddCart() {
        let count=3;
        for (let i = 1; i <= count; i++) {
           
            await this.$$addCart()[i].click()
            await browser.pause(3000)
        }
        return count;
    }

    

    async clickBuyNow() {
        await this.$buynow().click()
    }
}
export default new shopPage()