import CommonPage from "./commonPage.js";
import componentsPage from "./componentsPage.js";

export class LandingPage extends CommonPage{
    constructor(){
        super();
    
    }
    /**
     * To click on the component option present in the navigation bar.
     */
    async clickComponent(){
        await this.$componentsHeader().click();
        await componentsPage.$popUpLearnMore().waitForClickable({timeout:5000,timeoutMsg:"Option not yet clicked."});
        
    }
    }

    export default new LandingPage();