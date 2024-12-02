import CommonPage from "./commonPage.js";
class HolidayPage extends CommonPage {
  constructor() {
    super();
    this.$holidayHeader = () =>$(`//h1[normalize-space()="Book Domestic and International Holiday Packages"]`);
    this.$allDestination = () =>$(`//a[contains(text(),"All Destinations")]/parent::li`);
    this.$food = () => $(`//a[@href="theme/food-packages"]`);
  }
/**
 * Click on the all destination button
 */
  async clickAllDestination() {
    await this.$allDestination().click();
    await this.$food().waitForDisplayed({
      timeout: 2000,
      timeoutMsg: "Food button is not visible",
    })
  }

  /**
   * Click on the food menu from all destination list
   */

  async clickFood() {
    await this.$food().click();
  }
}
export default new HolidayPage();
