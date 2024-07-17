import CommonPage from "./commonPage.js";
import holidayPage from "./holidayPage.js"
class HomePage extends CommonPage{
    constructor(){
        super();
        this.$homeHeader=()=>$('//div[@class="main-logo"]');
        this.$holidayCategory=()=>$('(//span[@class="ak-holidays icon"])[2]');
    }
    /**
     * to click on the holiday category in the homepage
     */
    async clickHoliday(){
        await this.$holidayCategory().click();
        await holidayPage.$holidayHeader().waitForDisplayed({timeout:10000,timeoutMsg: 'page is not visible'});

    }
}
export default new HomePage();