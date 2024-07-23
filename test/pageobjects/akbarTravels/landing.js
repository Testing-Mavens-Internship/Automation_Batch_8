import Common from "./common.js";

class LandingPage extends Common{
    constructor(){
        super();
        this.$holidayTab=()=>$(`//main-menu//h3[text()="Holidays"]`);
        this.$holidayHeader=()=>$(`//h1[contains(text(),"Book Domestic")]`);
    }
    /**
     * To click on holiday tab
     */
    async clickOnHolidayTab(){
        await this.$holidayTab().click();
        await homePage.$holidayHeader().waitForDisplayed({ timeout: time, timeoutMsg: "holiday page is not loading" });
    }
}
export default new LandingPage();