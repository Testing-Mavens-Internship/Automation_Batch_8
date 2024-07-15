class ProductDetailsPage {
  constructor() {
    this.$addToCart = () => $(`//button[text()="Add to Cart"]`);
    this.$buyNow = () => $(`//p[text()="Buy Now"]`);
  }
  async addToCart() {
    await this.$addToCart().click();
  }
  async buyNow() {
    await this.$buyNow().click();
  }
}
export default new ProductDetailsPage();
