import { $ } from '@wdio/globals'
import Page from './page.js';

//webpage (earlier one): https://the-internet.herokuapp.com/login
//webpage (current): https://www.saucedemo.com/

class LoginPage extends Page {
  
    constructor()
    {   
        super()
        this.$username=()=> $('#user-name')
        this.$password=()=> $('#password')
        this.$loginBtn=()=> $('#login-button')
    }

    async login()
    {
        await this.$username().setValue("standard_user")
        await this.$password().setValue("secret_sauce")
        await this.$loginBtn().click()
    }
}

export default new LoginPage();
