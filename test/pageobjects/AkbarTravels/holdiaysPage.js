import common from "./commonPage.js";

class Holidays extends common {
    constructor() {
        super();
        this.$holidayPageHeader = () => $(`//div[@class="firstbox"]`);
        this.$allDestination = () => $(`(//a[text()="All Destinations"])[1]`);
        this.$foodOption = () => $(`(//div[@class="textblock"]/h4)[4]`);
    }

    async clickAllDestination() {
        const allDestination = await this.$allDestination();
        await allDestination.waitForClickable({ timeout: 5000 });
        await allDestination.click();
    }

    async clickFoodOption() {
        const foodOption = await this.$foodOption();
        await foodOption.waitForClickable({ timeout: 5000 });
        await foodOption.click();
    }
}

export default new Holidays();
