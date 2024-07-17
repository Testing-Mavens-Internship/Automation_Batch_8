import CommonPage from "./commonPage.js";
import foodPage from "./foodPage.js";
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
    await foodPage.$foodHeader().waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Food page is not visible",
    })
  }
}
export default new HolidayPage();
