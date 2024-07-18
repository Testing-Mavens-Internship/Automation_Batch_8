import CommonPage from "./commonPage.js";

class LoginPage1 extends CommonPage {

    constructor()
    {
        super()
        this.$pgHeader=()=> $('//span[text()="PLAYGROUND"]')
        this.$username=()=> $('//input[@name="username"]')
        this.$password=()=> $('//input[@name="password"]')
        this.$signIn=()=> $('//button[@type="submit"]')
    }

    async loginValidation1()
    {
        await this.$username().setValue("playground")
        await this.$password().waitForDisplayed({ timeout: 5000 })
        await this.$password().setValue("playground@TM")
        await this.$signIn().waitForDisplayed({ timeout: 5000 })
        await this.$signIn().click()
    }
}

export default new LoginPage1()
