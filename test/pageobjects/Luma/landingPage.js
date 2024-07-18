import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        this.$menCategory=()=> $('//span[text()="Men"]')
        this.$tops=()=> $('//a[@id="ui-id-17"]')
        this.$jackets=()=> $('//a[@id="ui-id-19"]')
    }

    async hoverMenCategory()
    {
        await this.$menCategory().moveTo()
        await this.$tops().waitForDisplayed({ timeout: 5000 })
        await this.$tops().moveTo()
        await this.$jackets().waitForDisplayed({ timeout: 5000 })
        await this.$jackets().click()
    }
}

export default new LandingPage()
