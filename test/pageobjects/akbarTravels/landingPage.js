import CommonPage from "./commonPage.js";
import holidayPage from "./holidayPage.js";
class LandingPage extends CommonPage {
  constructor() {
    super();
    this.$holidaysButton = () =>$(`(//h3[normalize-space()="Holidays"]/ancestor::a/parent::li)[2]`);
    this.$laterNotification = () => $(`#wzrk-cancel`);
  }
/**
 * Click on the holiday button and redirect to the holiday page
 */
  async clickHoliday() {
    if (await this.$laterNotification().isDisplayed()) {
      await this.$laterNotification().click();
    }
    await this.$holidaysButton().click();

    await holidayPage
      .$holidayHeader()
      .waitForDisplayed({
        timeout: 5000,
        timeoutMsg: "Holiday page is not visible",
      });
    
  }
}
export default new LandingPage();
