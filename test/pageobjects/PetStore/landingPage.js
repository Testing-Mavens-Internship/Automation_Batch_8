import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$signInLink=()=> $('//a[text()="Sign In"]')
        }
    }

    /**
     * Method to click on SignIn link
     */
    async clickSignInIcon()
    {
        await this.$signInLink().click()
    }
}
export default new LandingPage()
