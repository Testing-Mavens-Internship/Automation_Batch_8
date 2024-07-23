import commonPage from "./commonPage.js";

class loginPage extends commonPage
{
    constructor()
    {
        super()
        this.$username=()=>$('//input[@placeholder="Username"]')
        this.$password=()=>$('//input[@placeholder="Password"]')
        this.$submitButton=()=>$('//button[@type="submit"]')
        this.$homePageHeader=()=>$('//p[text()="Shop by Category"]')
    }

    /**
     * Login
     */
    
    async login()
    {
        await this.$username().setValue("playground")
        await this.$password().setValue("playground@TM")
        await this.$submitButton().waitForClickable({timeout:5000,timeoutMsg:"Not Clickable"})
        await this.$submitButton().click()
        await this.$homePageHeader().waitForDisplayed({timeout:10000,timeoutMsg:"Not found"})
    }
}
export default new loginPage()