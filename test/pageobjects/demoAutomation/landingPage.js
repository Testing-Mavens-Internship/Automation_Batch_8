import CommonPage from "../demoAutomation/common.js";
class LandingPage extends CommonPage{
 
    constructor()
    {
      super();
       this.$emailFirst = () => $('//input[@placeholder="Email id for Sign Up"]')
       this.$submitButton = () => $('//img[@id="enterimg"]')
    }
 
 
async firstEmail(email)
{
  await this.$emailFirst().setValue(email);
  await this.$submitButton().click();
}
 
}
 
 
export default new LandingPage();

 