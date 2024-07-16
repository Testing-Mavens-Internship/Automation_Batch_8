import CommonPage from "./lt_commonPage.js";

export class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$landingPageHeader=()=>$(`//a[@title="Poco Electro"]`)
        this.$myAccountHeader=()=> $(`(//span[normalize-space()="My account"])[2]`);
        this.$register=()=> $(`//span[normalize-space()="Register"]`);
    }
 
    async newRegister(){
            await this.$myAccountHeader().waitForDisplayed({timeout:5000,timeoutMsg :"Header not displayed"})
            await this.$myAccountHeader().moveTo();
            await this.$register().waitForClickable({timeout: 5000,timeoutMsg:"Option still not clicked."});
            await this.$register().click();
    }
            
}
 
export default new LandingPage();