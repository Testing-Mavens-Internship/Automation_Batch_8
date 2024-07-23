import CommonPage from "../akbarCruise/common.js"

class LandingPage extends CommonPage{
    constructor(){
        super();
        this.$pageHeader=()=>$(`//div[@class="logo"]`);
        this.$clickCruise=()=>$(`//main-menu[@class="main-menu"]//span[@class="ak-cruise icon"]`);
        
        
    }
    /**
     * To click on the cruise icon
     */
    async clickCruiseIcon(){
        await this.$clickCruise().click();
    }
}

export default new LandingPage();