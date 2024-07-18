import CommonPage from "./commonPage.js"

class LandingPage extends CommonPage {

    constructor()
    {
        super()
    }

    async dropdownClick()
    {
        await this.$dropdown().waitForDisplayed({ timeout: 5000 })
        await this.$dropdown().click()
        await this.$loginOption().waitForDisplayed({ timeout: 5000 })
        await this.$loginOption().click()
    }
}

export default new LandingPage()
