import CommonPage from "./commonPage.js";

class LoginPage2 extends CommonPage {

    constructor()
    {
        super()
        this.$loginHeader=()=> $('//h2[text()="Welcome Back"]')
        this.$email=()=> $('//input[@name="email"]')
        this.$pswd=()=> $('//input[@name="password"]')
        this.$loginBtn=()=> $('//button[@type="submit"]')
    }

    async loginValidation2()
    {
        await this.$email().scrollIntoView()
        await this.$email().setValue("athira01081998@gmail.com")
        await this.$pswd().waitForDisplayed({ timeout: 5000 })
        await this.$pswd().setValue("athira1998")
        await this.$loginBtn().waitForDisplayed({ timeout: 5000 })
        await this.$loginBtn().click()
    }
}

export default new LoginPage2()
