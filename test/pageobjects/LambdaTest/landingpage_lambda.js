import CommmonLambda from "./common_lambda.js";
class LandingPage extends CommmonLambda{
    constructor(){
        super()
        this.$myaccount=()=>$(`//li[@class="nav-item dropdown dropdown-hoverable"]/a/i`)
        this.$register=()=>$(`//span[normalize-space()="Register"]`)
        
    }
    async myAccountIcon(){
        await this.$myaccount().moveTo();
    }
    async ClickOnregister(){
        await this.$register().click();
    }
}
export default new LandingPage();