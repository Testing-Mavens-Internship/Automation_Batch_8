import Common from "./common.js";

class LoginPage extends Common{
    constructor(){
        super();
        this.$loginPageHeader=()=>$(`//div[@class="login_logo"]`);
        this.$userNameField=()=>$(`//input[@id="user-name"]`);
        this.$passwordField=()=>$(`//input[@id="password"]`);
        this.$userNames=()=>$(`//div[text()="standard_user"]`);
        this.$passwords=()=>$(`//div[@class="login_password"]`);
        this.$loginButton=()=>$(`//input[@id="login-button"]`);
    }
    async login(){
        let usernames=await this.$userNames().getText();
        const userName=usernames.split("\n");
        let user=userName[1];
        console.log("Username: ",user)
        let passwords=await this.$passwords().getText();
        const password=passwords.split("\n");
        let pass=password[1];
        console.log("password: ",pass);
        await this.$userNameField().setValue(user);
        await this.$passwordField().setValue(pass);
        await this.$loginButton().click();
    }
    

}
export default new LoginPage();