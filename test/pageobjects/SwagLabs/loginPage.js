import Common from "./common.js";

class LoginPage extends Common {

    constructor()
    {
        super()
        this.$username=()=> $('//input[@placeholder="Username"]')
        this.$password=()=> $('//input[@placeholder="Password"]')
        this.$validUsername=()=> $('//div[@class="login_credentials"]')
        this.$validPassword=()=> $('//div[@class="login_password"]')
        this.$submitButton=()=> $('//input[@id="login-button"]')
    }

    async enterValues()
    {
        let un=[], pswd=[]
        un = await this.$validUsername().getText()
        const u=un.split("\n")
        const u1=u[1]
        console.log(u1)

        pswd = await this.$validPassword().getText()
        const p=pswd.split("\n")
        const p1=p[1]
        console.log(p1)

        await this.$username().setValue(u1)
        await this.$password().setValue(p1)
        await this.$submitButton().click()
        await browser.pause(2000)
    }
}

export default new LoginPage()
