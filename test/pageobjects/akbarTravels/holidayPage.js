import CommonPage from "./commonPage.js";
import foodPage from "./foodPage.js";
class HolidayPage extends CommonPage{
    constructor(){
        super();
        this.$holidayHeader=()=>$(`//div[@class="firstbox"]`);
        this.$mouse=()=>$('//div[@class="mouse"]');
        this.$destination=()=>$(`//a[contains(text(),"All Destinations")]/parent::li`);
        this.$food=()=>$(`//a[@href="theme/food-packages"]`);
    }
    /**
     * selecting "All destination" option under browse by experience heading
     */
    async clickAllDestination(){
        await this.$mouse().waitForDisplayed({timeout:10000,timeoutMsg: 'page is not visible'});
        await this.$mouse().click();
        await this.$destination().scrollIntoView();
        await this.$destination().click();
    }
    /**
     * click food option
     */
    async clickFood(){
        await this.$food().click();
        await foodPage.$food().waitForDisplayed({timeout:10000,timeoutMsg: 'page is not visible'});
    }
}
export default new HolidayPage();