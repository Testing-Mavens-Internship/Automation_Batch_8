import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    constructor(){
        super();
        this.$userName=()=>$('#user-name');
        this.$passWord=()=>$('#password');
        this.$login=()=>$('#login-button');
        
    }
    async login(){
       
        await this.$userName().setValue("standard_user");
        await this.$passWord().setValue("secret_sauce");
        await this.$login().click();
    }
}
export default new LoginPage();
