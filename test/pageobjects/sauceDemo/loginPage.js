import CommonPage from "./commonPage.js";
class Login extends CommonPage{
    constructor(){
        super();
        this.$loginPageHeader =() => $('//div[@class="login_logo"]');
        this.$acceptedUsernames =() => $('//div[@id="login_credentials"]');
        this.username = "";
        this.$acceptedPassword =() => $('//div[@class="login_password"]');
        this.password = "";
        this.$usernameField =() => $('//input[@id="user-name"]');
        this.$passwordField =() => $('//input[@id="password"]');
        this.$loginButton =() => $('//input[@class="submit-button btn_action"]');

    }
    async extractUsernameAndPasswords(){
        let arr = [];
        arr = await this.$acceptedUsernames().getText();
        let extractedUsername = arr.split("\n");
        // console.log(extractedUsername);
        // extractedUsername.forEach(element => {
        //     console.log("username => "+ element);
        // });
        let arr2 = [];
        arr2 = await this.$acceptedPassword().getText();
        let extractedPassword = arr2.split("\n");

        this.username+= extractedUsername[1];
        this.password+= extractedPassword[1];
        console.log(`Username: ${this.username} and Password: ${this.password}`);
    }

    async doLogin(){
        await this.$usernameField().setValue(this.username);
        await this.$passwordField().setValue(this.password);
        await this.$loginButton().click();
    }
}export default new Login();