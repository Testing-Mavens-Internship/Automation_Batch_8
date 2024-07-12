import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$('//div[text()="PlayGround"]');
        this.$user=()=>$(`//*[local-name()='svg'][@viewBox="0 0 320 512"]`);
        this.$login=()=>$('//li[text()="Login"]')
    }
async clickUserIcon(){
   await this.$user().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
    await this.$user().click();
}
async ClickLogin(){
   await this.$login().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
await this.$login().click();
} 
}

export default new LandingPage();