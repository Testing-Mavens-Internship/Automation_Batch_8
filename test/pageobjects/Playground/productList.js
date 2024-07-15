class ProductListPage {
  constructor() {
    this.$shopByColor = () =>
      $(
        `//span[text()="Shop by Color"]/ancestor::div[@class="border-r border-gray-200"]`
      );
    this.$pickColor = () =>
      $(
        `//span[text()="Shop by Color"]/ancestor::div//label[text()="Blue"]/preceding::input[@id="Blue"]`
      );
    this.$singleProduct = (product) =>
      $(`//h2[text()=${product}]//ancestor::div[@class="mt-4 flex flex-col justify-between"]//preceding-sibling::div[@class="relative overflow-hidden w-full h-96 flex items-center justify-center"]`);
  }
  async pickColor() {
    await this.$shopByColor().click();
    await this.$pickColor().click();
  }
  async selectProduct(product) {
    await this.$singleProduct(product).click();
  }
}
export default new ProductListPage();
