import CommonPage from "./lm_CommonPage.js";

class HomePage extends CommonPage{

    constructor()
    {
        super();
        this.$desktop=()=>$('//h4[normalize-space()="Desktops"]')
    }


    async clickOnTopTrending()
    {
        await this.$desktop().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
        await this.$desktop().click();
    }

}


export default new HomePage();