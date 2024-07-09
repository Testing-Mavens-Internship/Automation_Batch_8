import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
   constructor(){
        super();
        this.$username=() => $("#user-name");
        this.$password=() => $("#password");
        this.$button=() => $("#login-button");

   }
   async login(){
    await this.$username().setValue("standard_user");
    await this.$password().setValue("secret_sauce");
    await this.$button().click();
}
   
}


export default new LoginPage();
