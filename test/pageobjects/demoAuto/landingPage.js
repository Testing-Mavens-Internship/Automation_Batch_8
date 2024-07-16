import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$Email=()=>$('//input[@id="email"]')
        this.$enter=()=>$('//img[@id="enterimg"]')
    }
   
    async enterEmail(email){
        await this.$Email().setValue(email);
        await this.$enter().click();
    }
}
export default new LandingPage();