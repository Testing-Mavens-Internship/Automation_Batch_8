import Common from "./common.js";

class SignIn extends Common{
    constructor(){
        super();
        this.$registerLink=()=>$(`//a[text()="Register Now!"]`);
    }
    /**
     * Click on the register link
     */
    async clickRegister(){
        await this.$registerLink().click();
    }
}
export default new SignIn()