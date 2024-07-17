import CommonPage from "./commonPage.js";


class FoodPage extends CommonPage {
  constructor() {
    super();
    this.$foodHeader = () => $(`//h1[normalize-space()="Food Packages"]`);
    this.$akbarReco = () =>$(`//li[@class="themes39"]//div[@class="checkbox"]`);
    this.$famWithKid = () =>$(`//li[@class="themes40"]//div[@class="checkbox"]`);
    this.$packageDetailButton = () =>$(`//h3[normalize-space()="Highlights of Turkey"]//ancestor::div[@class="wrapper "]//button/parent::a`);
  }
  /**
   * To click on the Family with kids checkbox filter.
   */
  async clickFilter() {
    await this.$akbarReco().click();
    await this.$famWithKid().waitForDisplayed({timeout:5000,timeoutMsg:"Filter not displayed."})
    await this.$famWithKid().click();
    
  }
  /**
   * To click on the package detail button of the corresponding package.
   */
  async clickPackageDetail() {
    await this.$packageDetailButton().scrollIntoView();
    await this.$packageDetailButton().moveTo();
    await this.$packageDetailButton().waitForClickable();
    await this.$packageDetailButton().click();
  }
}

export default new FoodPage();
