class homePagePlayground {
    constructor() {
      this.$shop = () => $(`//a[text()="Shop"]`);
    }
   
    async shopOptionClick() {
      await this.$shop().click();
      await browser.url("https://www.playground.testingmavens.tools/shop?page=1");
    }
  }
  export default new homePagePlayground();
   