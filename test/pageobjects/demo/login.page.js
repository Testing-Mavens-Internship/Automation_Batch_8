import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    constructor() {
        super();
        this.$username= ()=>$('//input[@id="user-name"]');
        this.$password= ()=>$('//input[@id="password"]');
        this.$submit =()=> $('//input[@id="login-button"]');
    }
    async login(){
        
        await this.$username().setValue("standard_user")
        await this.$password().setValue("secret_sauce")
        await this.$submit().click();
    }
    
    }
    
    


export default new LoginPage();
