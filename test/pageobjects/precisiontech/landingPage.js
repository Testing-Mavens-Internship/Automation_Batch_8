import Common from "../precisiontech/common.js";

class LandingPage extends Common {
  constructor() {
    super();
    this.$header = () => $(`//img[@alt="PRECISIONTECH"]`);
    this.$solution = () => $(`//span[text()="SOLUTIONS"]`);
    this.$$dropDownList = () => $$(`//ul[@id="HeaderMenu-MenuList-1"]//li//a`);
    this.$dropDownFirstOption = () =>
      $(`#HeaderMenu-solutions-stock-profiling-and-analysis-services`);
    this.$cookieAccept=()=>$(`//button[text()="Accept"]`)
  }
  async selectSolution() {
    await this.$solution().click();
  }
  async dropDownSelection() {
    let dropDownItems = [];
    let dropItems = await this.$$dropDownList();
    for (let item of dropItems) {
      await item.waitForDisplayed({
        timeout: 1000,
        timeoutMsg: "Dropdown items still not displayed",
      });
      dropDownItems.push(await item.getText());
    }
    return dropDownItems;
  }
  async cookieAccept(){
    await this.$cookieAccept().click();
  }
  async firstDropDownOption() {
    await this.$dropDownFirstOption().waitForDisplayed({timeout:1000,timeoutMsg:"first option still not displayed"})
    await this.$dropDownFirstOption().click();
  }
}
export default new LandingPage();
