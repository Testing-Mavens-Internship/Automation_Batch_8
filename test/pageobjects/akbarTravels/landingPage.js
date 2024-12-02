import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {
  constructor() {
    super();
    this.$holidays = () =>$(`(//h3[normalize-space()="Holidays"]/ancestor::a/parent::li)[2]`);
    this.$laterNotification = () => $(`#wzrk-cancel`);
  }
/**
 * Click on the holiday button and redirect to the holiday page
 */
  async clickHoliday() {
    if (await this.$laterNotification().isDisplayed()) {
      await this.$laterNotification().click();
    }
    await this.$holidays().click();
  }
}
export default new LandingPage();
