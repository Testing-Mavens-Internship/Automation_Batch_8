import CommonPage from "./commonPage.js";
import packagePage from "./packagePage.js";

class FoodPage extends CommonPage {
  constructor() {
    super();
    this.$foodHeader = () => $(`//h1[normalize-space()="Food Packages"]`);
    this.$akbarReco = () =>
      $(`//li[@class="themes39"]//div[@class="checkbox"]`);
    this.$famWithKid = () =>
      $(`//li[@class="themes40"]//div[@class="checkbox"]`);
    this.$packageDetailButton = () =>
      $(
        `//h3[normalize-space()="Highlights of Turkey"]//ancestor::div[@class="wrapper "]//button/parent::a`
      );
      this.$sortMenu=()=>$(`//div[@class="sortby"]`)
  }
  /**
   * This functionn is to click on the akbar recommended and Family with kids from filter section
   */
  async clickFilter() {
    await this.$akbarReco().click();
    await this.$famWithKid().click();
    await this.$sortMenu().waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Filter menu is not visible",
    })
  }

  /**
   * This function is to click on the package detail button
   */
  async clickPackageDetail() {
    await this.$packageDetailButton().scrollIntoView();
    await this.$packageDetailButton().moveTo();
    await this.$packageDetailButton().waitForClickable();
    await this.$packageDetailButton().click();
    
    await packagePage.$header().waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Package page is not visible",
    })
    
  }
}

export default new FoodPage();
