import Common from "./common.js";
class LandingLogin extends Common{
    constructor(){
        super();
        this.$cheader=()=>$(`//span[text()="PLAYGROUND"]`);
        this.$cUserName=()=>$(`//input[@name="username"]`);
        this.$cPassword=()=>$(`//input[@name="password"]`);
    }
    async cLogin(){
        await this.$cUserName().setValue("playground");
        await this.$cPassword().setValue("playground@TM");
        await this.$submitButton().click();
    }
}
export default new LandingLogin();