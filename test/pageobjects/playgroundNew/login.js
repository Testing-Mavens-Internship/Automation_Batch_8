import Common from "./common.js";

class Login extends Common
{
    constructor()
    {
        super()
        this.$username=()=>$(`//input[@name="username"]`)
        this.$password=()=>$(`//input[@name="password"]`)
        this.$loginbtn=()=>$(`//button[text()='Sign In']`)
    }
    async login()
    {
        await this.$username().setValue('playground')
        await this.$password().setValue('playground@TM')
        await this.$loginbtn().click()
    }
}
export default new Login()