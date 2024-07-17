import CommonPage from "./commonPage.js";

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
  }

  /**
   * This function is to click on the package detail
   */
  async clickPackageDetail() {
    await this.$packageDetailButton().scrollIntoView();
    await this.$packageDetailButton().moveTo();
    await this.$packageDetailButton().waitForClickable();
    await this.$packageDetailButton().click();
  }
}

export default new FoodPage();
