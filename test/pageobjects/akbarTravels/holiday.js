import Common from "./common.js";

class Holiday extends Common {
    constructor() {
        super();
        this.$scrollLocation = () => $(`//section[@class="exclusive-deals"]`);
        this.$allDestinations = () => $(`//div[@class="left"]//a[text()="All Destinations"]/..`);
        this.$food = () => $(`//img[@data-src="https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/holiday_browse_by_exp1588615983rsz_food.jpg"]`);
    }
    /**
     * To scroll down to All destinations
     */
    async scrollToLocation() {
        await this.$scrollLocation().scrollIntoView();
        await holidayPage.$allDestinations().waitForDisplayed({ timeout: time, timeoutMsg: "Scroll is not working" })
    }
    /**
     * To click on All Destinations
     */
    async allDestinations() {
        await this.$allDestinations().click();
    }
    /**
     * To click on food option
     */
    async clickingFood() {
        await this.$food().click();
        await foodPage.$foodHeader().waitForDisplayed({ timeout: time, timeoutMsg: "Food page is not loading" })
    }
}
export default new Holiday();