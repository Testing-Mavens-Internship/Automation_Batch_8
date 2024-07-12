import CommonPage from "./pg_common.js";

class LoginPage extends CommonPage {

    constructor()
    {
        super();
        this.$email = () => $(`//input[@name="email"]`);
        this.$password = () => $(`//input[@name="password"]`);
        this.$loginSubmitButton = () => $(`//button[@type="submit"][text()="Login"]`);

       
    }

    async enterCredentials()

    {
        await this.$email().setValue('standard_user');
        await this.$password().setValue('secret_sauce');
        await this.$loginButton().click();
       

    }
 
}

export default new LoginPage();

