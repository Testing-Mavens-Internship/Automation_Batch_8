// import { $ } from '@wdio/globals'
import Common from "./pg_common.js";

class Login extends Common{
    constructor(){
        super()
        this.$email=()=>$(`//form//input[@name='email']`)
        this.$password=()=>$(`//form//input[@name='password']`)
        this.$loginbtn=()=>$(`//button[contains(text(),'Login')]`)
    }
    validateLogin()
    {

    }
}
export default new Login()