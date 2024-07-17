import CommonPage from "./commonPage.js";

 class HolidayPage extends CommonPage {
    constructor() {
        super();
        this.$holidayHeader=()=>$(`//h1[normalize-space()="Book Domestic and International Holiday Packages"]`)
        this.$allDestination=()=>$(`//a[contains(text(),"All Destinations")]/parent::li`)
        this.$foodOption=()=>$(`//a[@href="theme/food-packages"]`)
    }
    /***
     * To select All destinations option in the home page.
     */

    async clickAllDestination() {
        await this.$allDestination().click();
        await this.$allDestination().waitForClickable({timeout:5000,timeoutMsg:"Option not yet clicked."});
        await holidayPage.$foodOption().waitForDisplayed({timeout:5000,timeoutMsg:"Option not displayed."});
    }
    /**
     * To select the food option in the scrollable options.
     */

    async clickFood() {
        await this.$foodOption().click();
        await this.$foodOption().waitForClickable({timeout:5000,timeoutMsg:"Option not yet clicked."});
        await foodPage.$foodHeader().waitForDisplayed({timeout:5000,timeoutM})
    }
}
    export default new HolidayPage();
