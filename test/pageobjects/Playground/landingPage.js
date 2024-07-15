import Common from "./common.js";

class LandingPage extends Common {
  constructor() {
    super()
    this.$header = () => $(`//div[text()="PlayGround"]`);
    this.$userIcon = () =>
      $(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`);
    this.$login = () => $(`//li[text()="Login"]`);
  }
  async clickUserIcon() {
    await this.$userIcon().click();
  }
  async loginSelection() {
    await this.$login().click();
    await browser.url("https://www.playground.testingmavens.tools/signin");
  }
}
export default new LandingPage();
