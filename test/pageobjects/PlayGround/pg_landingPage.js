import CommonPage from "./pg_commonPage.js"

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        this.$dropdown=()=> $('//*[local-name()="svg" and @viewBox="0 0 320 512"]')
        this.$loginOption=()=> $('//li[text()="Login"]')

    }

    // async logoValidation()
    // {

    // }

    async dropdownClick()
    {
        await this.$dropdown().click()
        await this.$loginOption().click()
    }
}

export default new LandingPage()
