import Common from "./common.js";

class SignIn extends Common{
    constructor(){
        super();
        this.$registerLink=()=>$(`//a[text()="Register Now!"]`);
        this.$signInHeader=()=>$(`//p[text()="Please enter your username and password."]`);
        this.$loginCredentials=(credentials)=>$(`//input[@name="${credentials}"]`);
    }
    /**
     * Click on the register link
     */
    async clickRegister(){
        await this.$registerLink().click();
    }
    async Login(){
        await this.$loginCredentials("username").setValue();
        await this.$loginCredentials("password").setValue();
        await this.$loginCredentials("signon").click();
    }
}
export default new SignIn()