import CommonPage from "./commonPage.js"

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        this.$logo=()=> $('//img[@id="logo"]')
        this.$email=()=> $('//input[@id="email"]')
        this.$enterBtn=()=> $('//img[@id="enterimg"]')
    }

    async enterEmail(email)
    {
        await this.$email().setValue(email)
        await this.$enterBtn().click()
    }
}

export default new LandingPage()
