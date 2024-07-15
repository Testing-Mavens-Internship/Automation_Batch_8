import Common from "./common.js";

class Login extends Common
{
    constructor()
    {
        super()
        this.$email=()=>$(`//input[@id='email']`)
        this.$login=()=>$(`//a[@href="Register.html"]/img`)
    }

    async login()
    {
        let result=Math.floor(Math.random()*100)
        await this.$email().setValue(`abc${result}@gmail.com`)
        await this.$login().click()
    }
}
export default new Login()