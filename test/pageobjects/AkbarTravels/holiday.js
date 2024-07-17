import Common from "./common.js";

class Holiday extends Common {
    constructor() {
        super();
        this.$scrollLocation = () => $(`//section[@class="exclusive-deals"]`);
        this.$allDestinations = () => $(`//div[@class="left"]//a[text()="All Destinations"]/..`);
        this.$food = () => $(`//img[@data-src="https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/holiday_browse_by_exp1588615983rsz_food.jpg"]`);
    }
    async scrollToLocation() {
        await this.$scrollLocation().scrollIntoView();
    }
    async allDestinations() {
        await this.$allDestinations().click();
    }
    async clickingFood() {
        await this.$food().click();
    }
}
export default new Holiday();