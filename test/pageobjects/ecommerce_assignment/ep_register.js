import Common from "./ep_common.js";

class Register extends Common
{
    constructor()
    {
        super()
        this.$register_header=()=>$(`//h1[text()='Register Account']`)
        // this.$firstname=()=>$(`//input[@name='firstname']`)
        // this.$lastname=()=>$(`//input[@name='lastname']`)
        this.$common=(n)=>$(`//input[@name="${n}"]`)
        // this.$email=()=>$(`//input[@name='email']`)
        // this.$telephone=()=>$(`//input[@name='telephone']`)
        // this.$password=()=>$(`//input[@name='password']`)
        // this.$confirmpassword=()=>$(`//input[@name='confirm']`)
        this.$agree=()=>$(`//label[@for="input-agree"]`)
        this.$registerbtn=()=>$(`//input[@value='Continue']`)
        this.$success=()=>$(`//h1[text()=' Your Account Has Been Created!']`)
        this.$continuebtn=()=>$(`//a[contains(text(),'Continue')]`)
        this.$myact=()=>$(`//h2[text()='My Account']`)
    }

    async register()
    {
        let result=Math.floor(Math.random()*1000)
        await this.$common('firstname').setValue('Jack')
        await this.$common('lastname').setValue('Dawson')
        await this.$common('email').setValue(`jackdawson${result}@gmail.com`)
        await this.$common('telephone').setValue('1234567890')
        await this.$common('password').setValue('jack123')
        await this.$common('confirm').setValue('jack123')
        await this.$agree().click()
        await this.$registerbtn().click()
    }
    
    async continue()
    {
        await this.$continuebtn().click()
    }
}
export default new Register()