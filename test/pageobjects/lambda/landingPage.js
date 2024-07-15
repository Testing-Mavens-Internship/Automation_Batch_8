import Common from "./common.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$header = () => $(`//a[@title="Poco Electro"]`);
    this.$myAccount = () =>
      $(
        `//span[normalize-space()="My account"]//ancestor::li[@class="nav-item dropdown dropdown-hoverable"]`
      );
    this.$loginButton = () => $(`//a[contains(@href,"login")]`);
    this.$registerButton = () => $(`//a[contains(@href,"register")]`);
  }

  /**
   * Hover on 'My Account' on landing page.
   */
  async hoverMyAccount() {
    await this.$myAccount().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is still not visible",
    });
    const myAccount = await this.$myAccount();
    await myAccount.moveTo();
  }

  /**
   *click on 'Register' button.
   */
  async clickRegister() {
    await this.$registerButton().waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Header is not visible",
    });
    await this.$registerButton().click();
  }
}
export default new LandingPage();
