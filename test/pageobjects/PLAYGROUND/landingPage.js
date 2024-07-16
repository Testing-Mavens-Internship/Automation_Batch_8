import CommonPage from "./commonPage.js";

export class LandingPage extends CommonPage{
constructor(){
    super();
    this.$logo=()=>$(`//div[text()="PlayGround"]`);
    this.$userIcon=()=>$(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`);
    this.$login=()=>$(`//li[text()="Login"]`)

}
async clickLogin(){
    await this.$userIcon().waitForClickable({timeout:1000,timeoutMsg:"Still not clicked."})
    await this.$userIcon().click();
    await this.$login().waitForClickable({timeout:1000,timeoutMsg:"Still not clicked."})
    await this.$login().click();
}
}
export default new LandingPage();