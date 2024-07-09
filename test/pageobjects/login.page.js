import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    constructor(){
        super();
    }
    async login(){
        await this.$userName().setValue("standard_user");
        await this.$password().setValue("secret_sauce");
        await this.$submitButton().click();
    }
}

export default new LoginPage();
