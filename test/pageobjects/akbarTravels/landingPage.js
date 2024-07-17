import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {
  constructor() {
    super();
    this.$holidaysIcon = () =>$(`(//h3[normalize-space()="Holidays"]/ancestor::a/parent::li)[2]`);
    this.$laterNotification = () => $(`#wzrk-cancel`);
  }
/**
 * To click on the holiday icon present in the navigation bar.
 */
  async clickHolidayIcon() {
    if (await this.$laterNotification().isDisplayed()) 
      await this.$laterNotification().click();
    await this.$holidaysIcon().click();
    await holidayPage.$holidayHeader().waitForDisplayed({timeout: 2000, timeoutMsg: 'Holiday page is not visible'})
  }
}
export default new LandingPage();
