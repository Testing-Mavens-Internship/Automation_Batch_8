import Common from "./pg_commonpage.js";

class MainLogin extends Common
{
    constructor()
    {
        super()
        this.$mainlogin_uname=()=>$(`//input[@name='username']`)
        this.$mainlogin_pwd=()=>$(`//input[@name='password']`)
        this.$mainlogin_login=()=>$(`//button[text()='Sign In']`)
    }
    async mainLoginfunction()
    {
        await this.$mainlogin_uname().setValue('playground')
        await this.$mainlogin_pwd().setValue('playground@TM')
        await this.$mainlogin_login().click()
    }
}
export default new MainLogin()