import CommonPl from "./pl_common.js"
class SignIn extends CommonPl{
    constructor(){
        super()
        this.$headerSign=()=>$(`//span[normalize-space()='PLAYGROUND']`)
        this.$username=()=>$(`//input[@name='username']`)
        this.$password=()=>$(`//input[@name='password']`)
        this.$signin=()=>$(`//button[normalize-space()='Sign In']`)


    }
    async firstSign(){
        await this.$username().setValue(`playground`)
        await this.$password().setValue(`playground@TM`)
        await this.$signin().click();



    }
}
export default new SignIn();