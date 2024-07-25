import CommonPage from "./commonPage.js";

class LoginPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$loginHeader=()=> $('//p[text()="Please enter your username and password."]')
            this.$registerLink=()=> $('//a[@href="/actions/Account.action?newAccountForm="]')
            this.$username=()=> $('//input[@name="username"]')
            this.$password=()=> $('//input[@name="password"]')
            this.$loginButton=()=> $('//input[@name="signon"]')
        }
    }

    /**
     * Method to click Register Now link
     */
    async clickRegisterNow()
    {
        await this.$registerLink().click()
    }

    /**
     * Method to enter the credentials in Login page
     */
    async enterCredentials()
    {
        await this.$username().setValue(101)
        await this.$password().setValue("Athira@123")
        await this.$loginButton().click()
    }
}
export default new LoginPage()
