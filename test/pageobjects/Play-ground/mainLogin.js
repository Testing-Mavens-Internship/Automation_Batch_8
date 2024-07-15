import Common from "../Play-ground/common.js";

class MainLogin extends Common{
    constructor(){
        super();
        this.$header=()=>$(`//span[text()="PLAYGROUND"]`);
        this.$userName=()=>$(`//input[@name="username"]`);
        this.$passWord=()=>$(`//input[@name="password"]`);
        this.$loginButton=()=>$(`//button[text()="Sign In"]`);
    }
    async mainLogin(username,password){
        await this.$userName().setValue(username);
        await this.$passWord().setValue(password);
        await this.$loginButton().waitForClickable({timeout:5000,timeoutMsg:"'Sign in' button is not clicked"})
        await this.$loginButton().click();
    }
}
export default new MainLogin()