import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$cruiseIcon=()=> $('(//h3[text()="Cruise"])[2]')
        }
    }

    async clickCruise()
    {
    
    await this.$cruiseIcon().waitForDisplayed({ timeout: 5000 })
    await this.$cruiseIcon().click()
    }
}
export default new LandingPage()
