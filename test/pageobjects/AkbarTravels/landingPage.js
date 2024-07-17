import Common from "./common.js";

class LandingPage extends Common {

    constructor()
    {
        super()
        this.$popup=()=> $('//button[text()="Later"]')
        this.$holidays=()=> $('(//h3[text()="Holidays"])[2]')
    }

    /**
     * Handle pop-up and click on the Holidays tab from the Landing page
     */
    async clickHolidays()
    {
        if(await this.$popup().isDisplayed())
        {
            await this.$popup().click()
        }
        await this.$holidays().click()
    }
}

export default new LandingPage()
