import Common from "./common.js";

class LandingPage extends Common{
    constructor(){
        super();
        this.$emailInput=()=>$(`//input[@id="email"]`);
        this.$signUpButton=()=>$(`//img[@id="enterimg"]`)

    }

    /**
     * Sign up using email
     * @param {*string} email 
     */

    async signUp(email){
        await this.$emailInput().setValue(email);
        await this.$signUpButton().click();
    }

}
export default new LandingPage()