export default class Common {
  constructor() {
    this.$thankyouHeader = () => $(`//h2[text()="Thank you for your order!"]`);
  }
  /**
   * Launch the url in the browser
   */
  async launchUrl() {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
  }
}
