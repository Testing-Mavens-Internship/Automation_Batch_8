import common from "./commonPage.js";
class Products extends common {
  constructor() {
    super();
    this.$filterheader = () => $(`//h3[text()="Filter"]`);
    this.$minpricefield = () =>
      $(`(//input[@class="form-control" and @max="1999"])[last()]`);
    this.$maxpricefield = () =>
      $(`(//input[@class="form-control" and @max="2000"])[last()]`);
    this.$sortbydd = () => $(`//select[@id="input-sort-212403"]`);
    this.$sortbylowtohigh = () =>
      $(`(//option[text()="Price (Low > High)"])[last()]`);
    this.$$elementsprice = () => $$(`//span[@class="price-new"]`);
    this.$elementprice = (index) => $(`(//span[@class="price-new"])[${index}]`);
    this.$copyright = () => $(`//div[@id="entry_217561"]`);
    this.$desktopheader = () => $(`//h1[text()="Desktops"]`);
    this.$clearbutton = () =>
      $(`(//a[@data-mz-reset="price"]/i[@class="fas fa-times"])[last()]`);
    this.$availabilityheader = () =>
      $(
        `//div[@class="mz-filter-group-header " and @data-target="#mz-filter-panel-0-5"]`
      );
    this.$instockcheckbox = () => $(`//label[@for="mz-fss-0--1"]`);
    this.$apple = () => $(`//label[@for="mz-fm-0-8"]`);
    this.$$productnames = () => $$(`//a[@class="text-ellipsis-2"]`);
    this.$productname = (index) => $(`(//a[@class="text-ellipsis-2"])[${index}]`);
    this.$$productimg = () => $$(`//div[@class="carousel-item active"]`);
    this.$addtocartbutton = (index) => $(`(//button[@title="Add to Cart"])[${index}]`);
    this.$largebutton = () => $(`//label[@for="mz-fc-0-38"]`);
    this.$mediumbutton = () => $(`//label[@for="mz-fc-0-39"]`);
    this.$addtocartbuttoninpopup = () => $(`//button[text()="Add to Cart"]`);
    this.$decreasebutton = () => $(`//button[@aria-label="Decrease quantity"]`);
    this.$addtocartpopupsize = () =>
      $(`//select[@id="input-option231-212958"]`);
    this.$mediumsize = () =>
      $(`//select[@id="input-option231-212958"]/option[@value="35"]`);
    this.$largesize = () =>
      $(`//select[@id="input-option231-212958"]/option[@value="34"]`);
    this.$carticon = () => $(`(//div[@class="cart-icon"])[1]`);
    this.$carticoncheckout = () => $(`//div[@data-id="217851"]/a[@role="button"]`);
    this.productsincart = [];
  }
  async FilterProducts() {
    await this.$sortbydd().click();
    await this.$sortbydd().selectByVisibleText("Price (Low > High)");
    // await this.$sortbylowtohigh().waitForDisplayed();
    // await this.$sortbylowtohigh().click();
    await this.$copyright().scrollIntoView();
    await this.$desktopheader().scrollIntoView();
    await this.$minpricefield().setValue(1080);
    await this.$maxpricefield().setValue(2000);
    await this.$minpricefield().click();
    await this.$copyright().scrollIntoView();
    await this.$desktopheader().scrollIntoView();
    await browser.pause(2000);

    const prices = [];
    // for (let element of this.$$elementsprice()) {
      for(let i =1;i<=this.$$elementsprice().length;i++){
        const priceText = await $elementprice(i).getText();
        const price = parseFloat(priceText.replace(/[^\d.-]/g, ''));
        prices.push(price);
    }
    return prices;
  }

  /**
   * method for resetting the min and max price fields
   */
  async clearbutton() {
    await this.$clearbutton().click();
  }

  async clickinstock() {
    await this.$availabilityheader().scrollIntoView();
    await this.$instockcheckbox().click();
  }

  async clickapple() {
    await this.$apple().scrollIntoView();
    await this.$apple().click();
  }

  async sortbyatoz() {
    await this.$sortbydd().scrollIntoView();
    await this.$sortbydd().click();
    await this.$sortbydd().selectByVisibleText("Name (A - Z)");
    await this.$copyright().scrollIntoView();
    await this.$desktopheader().scrollIntoView();

    const productNames = [];
    // for (let element of this.$$productnames())
    for(let i =1;i<=this.$$productnames().length;i++) {
      const productName = await this.$productname(i).getText();
      productNames.push(productName);
    }
    return productNames;
  }
  async addtocartfirstproduct() {
    for (let i = 1; i < this.$$productimg().length; i++) {
      await this.$$productnames()[i].moveTo();
      await this.$addtocartbutton().click();
      let pnames = await this.$$productnames()[i].getText();
      this.productsincart.push(pnames);
    }
  }
  async filterbysize() {
    await this.$largebutton().scrollIntoView();
    await this.$largebutton().click();
    await this.$mediumbutton().click();
    await this.$copyright().scrollIntoView();
    await this.$desktopheader().scrollIntoView();
    for (let i = 1; i <= this.$$productnames().length; i++) {
      await this.$productname(i).moveTo();
      await this.$addtocartbutton(i).click();
      let pname = await this.$productnames(i).getText();
      this.productsincart.push(pname);
      this.$decreasebutton().waitForDisplayed();
      this.$mediumsize().click();
      this.$addtocartpopupsize().click();
      this.$addtocartbuttoninpopup().click();

      await this.$productname(i).moveTo();
      await this.$addtocartbutton(i).click();
      this.$decreasebutton().waitForDisplayed();
      this.$largesize().click();
      this.$addtocartpopupsize().click();
      this.$addtocartbuttoninpopup().click();
    }
  }
  async clickcarticon() {
    this.$carticon().scrollIntoView();
    this.$carticon().click();
    this.$carticoncheckout().click();
  }
}
export default new Products();
