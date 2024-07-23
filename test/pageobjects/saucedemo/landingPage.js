import Common from "./common.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$header = () => $(`//div[text()="Swag Labs"]`);
    this.$userName = () => $(`//div[@id="login_credentials"]`);
    this.$passWord = () => $(`//div[@data-test="login-password"]`);
    this.$userNameInputField = () => $(`//input[@id="user-name"]`);
    this.$passwordInputField = () => $(`//input[@id="password"]`);
    this.$loginButton = () => $(`//input[@id="login-button"]`);
  }
  /**
   * Extract the username and password and login successfully using the username and password
   */
  async Login() {
    let loginDiv = await this.$userName().getText();
    let textNodes = loginDiv.split("\n");
    let username = textNodes[1].trim();

    let passwordDiv = await this.$passWord().getText();
    let passwordText = passwordDiv.split("\n");
    let password = passwordText[1].trim();

    await this.$userNameInputField().setValue(username);
    await this.$passwordInputField().setValue(password);
    await this.$loginButton().click();
  }
}
export default new LandingPage();
