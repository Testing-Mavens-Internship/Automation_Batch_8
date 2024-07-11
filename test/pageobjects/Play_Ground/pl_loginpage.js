import CommonPl from "./pl_common.js";
class Login extends CommonPl{
    constructor(){
        super()
        this.$loginheader=()=>$(`//p[normalize-space()='Login to your account']`)
        this.$Username=()=>$(`//input[@id='email']`)
        this.$Password=()=>$(`//input[@id='password']`)
        this.$pressLogin=()=>$(`//button[normalize-space()='Login']`)
    }
    async LoggingIn(){
        await this.$Username().setValue('sidharthrem13@gmail.com')
        await this.$Password().setValue('Sidrem1328')
        await this.$pressLogin().click();
    }

}
export default new Login();