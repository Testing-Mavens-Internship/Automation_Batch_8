import CommonPage from "./pg_commonPage.js"

class LoginPage extends CommonPage {

    constructor()
    {
        super()
        this.$email=()=> $('//input[@name="email"]')
        this.$pswd=()=> $('//input[@name="password"]')
        this.$loginBtn=()=> $('//button[@type="submit"]')
    }

    async loginValidation()
    {
        await this.$email().setValue("athira01081998@gmail.com")
        await this.$pswd().setValue("athira1998")
        await this.$loginBtn().click()
    }
}

export default new LoginPage()
