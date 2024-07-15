import CommonPage from "./commonPage.js";

class HomePage extends CommonPage{

    constructor()
    {
        super()
        this.$shopByCategory=()=> $('//p[text()="Shop by Category"]')
        this.$mobilesOption=()=> $('//li[text()="Mobiles"]')
    }

    async loggedInValidation()
    {
        await this.$dropdown().click()
    }

    async clickShopByCategory()
    {
        await this.$shopByCategory().click()
        await this.$shopByCategory().waitForDisplayed({timeout:5000})
        await this.$mobilesOption().click()
        await this.$mobilesOption().waitForDisplayed({timeout:5000})
    }
}

export default new HomePage()
