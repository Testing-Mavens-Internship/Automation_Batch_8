import Common from "./common.js";

class LandingPage extends Common{
    constructor(){
        super();
        this.$signInLink=()=>$(`//a[text()="Sign In"]`);
    }
    async clickSignIn(){
        await this.$signInLink().click();
    }
}
export default new LandingPage()