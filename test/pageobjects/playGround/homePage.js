import basePage from "./commonPage.js";

class homePage extends basePage {
    constructor() {
        super()
        this.$userIcon=()=>$('//div[@class="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative"]//div[@class="relative"]//div[@class="flex items-center cursor-pointer space-x-2"]')
        this.$logoutButton=()=>$('//li[normalize-space()="Log Out"]')
        this.$shopIcon=()=>$('//a[normalize-space()="Shop"]')
    }

    async clickUser() {
        await this.$userIcon().click()
    }
    async clickShop() {
        await this.$shopIcon().click()
    }
}
export default new homePage()