import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage{
    constructor(){
        super();
        
        this.$account=()=>$('(//span[normalize-space()="My account"])[2]');
        this.$register=()=>$('//a[@href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]')
    }
    /**
     * to hover over the account
     */
    async hoverAccount(){

            await this.$account().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
            const account = await this.$account();
            await account.moveTo();
    } 
    /**
     * to register the user
     */
    async clickRegister(){
        await this.$register().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
        await this.$register().click();
    }
}
export default new LandingPage();