import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    constructor()
    {
        super();
        this.$username = () =>$('#user-name');
        this.$password = () =>$('#password');
        this.$loginButton = () =>$('#login-button');
    }

    async login()
    {
        await this.$username().setValue('playground@tm.com');
        await this.$password().setValue('123456');
        await this.$loginButton().click();

        
    }
 
}

export default new LoginPage();
