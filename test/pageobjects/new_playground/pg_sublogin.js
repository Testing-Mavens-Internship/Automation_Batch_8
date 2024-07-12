import Common from "./pg_commonpage.js";

class SubLogin extends Common
{
    constructor()
    {
        super()
        this.$sublogin_header=()=>$(`//h2[text()='Welcome Back']`)
        this.$sublogin_email=()=>$(`//form//input[@name='email']`)
        this.$sublogin_password=()=>$(`//form//input[@name='password']`)
        this.$sublogin_login=()=>$(`//button[contains(text(),'Login')]`)
    }
    async subLoginfunction()
    {
        await this.$sublogin_email().setValue('playground@tm.com')
        await this.$sublogin_password().setValue('123456')
        await this.$sublogin_login().click()
    }
}
export default new SubLogin()