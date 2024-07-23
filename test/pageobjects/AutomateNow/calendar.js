import CommonPage from "./common.js";
class Calendar extends CommonPage {
    constructor() {
        super();
        this.$inputField = () => $(`//input[@type="text"][@id="g1065-selectorenteradate"]`);
        this.$nextButton = () => $(`//a[@title="Next"]`);
        this.$previousButton = () => $(`//a[@title="Previous"]`);
        this.$selectDay = (date) => $(`//a[@data-date="${date}"]`);
        this.$monthAndYear = () => $(`//div[@class="ui-datepicker-title"]`);
    }

    async getCurrentMonthAndYear() {
        const currentMonthText = await this.$monthAndYear().getText();
        return new Date(currentMonthText);
    }

    async navigateToMonthAndYear(targetDate) {
        let currentDate = await this.getCurrentMonthAndYear();

        while (currentDate.getMonth() !== targetDate.getMonth() || currentDate.getFullYear() !== targetDate.getFullYear()) {
            if (currentDate < targetDate) {
                await this.$nextButton().click();
            } else {
                await this.$previousButton().click();
            }
            currentDate = await this.getCurrentMonthAndYear();
        }
    }

    async selectDate(date) {
        const dayElement = await this.$selectDay(date);
        await dayElement.click();
    }

    async selectSpecificDate(targetDate) {
        await this.$inputField().click();
        await this.navigateToMonthAndYear(targetDate);
        await this.selectDate(targetDate.getDate());
        browser.pause(5000);
    }

    async getSelectedDate() {
        const dateValue = await this.$inputField().getValue();
        return new Date(dateValue);
    }
}

export default new Calendar();
