import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    constructor() {
        super()
        this.$userName=() => $('#user-name');
        this.$password=() => $('#password');
        this.$loginButton=() => $('//input[@id="login-button"]')
    }
    async login() {
        // $()waitForDisplayed(
        //     {
        //         timeout: 35000,
        //         timeoutMsg: 'Element not found',
        //         reverse
                
        //     }
        // )
        await this.$userName().setValue('standard_user')
        await this.$password().setValue('secret_sauce')
        await this.$loginButton().click()
    }
    

    
}
export default new LoginPage();
