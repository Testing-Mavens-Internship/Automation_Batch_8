import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
   constructor()
   {
    super()
    this.$username=()=>$('#user-name')
    this.$password=()=>$('#password')
    this.$submit=()=>$("#login-button")
   }

   async login()
   {
    // waitForDisplayed({
    //     timeout:5000,
    //     timeoutMsg:"Page not displayed"
    // })
    await this.$username().setValue("standard_user")
    await this.$password().setValue("secret_sauce")
    await this.$submit().click()
   }
}

export default new LoginPage();
