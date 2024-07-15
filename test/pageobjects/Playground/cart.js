class Cart {
  constructor() {
    this.$proceedTocheckout = () => $(`//button[text()="Proceed to Checkout"]`);
  }
  async proceedToCheckout() {
    await this.$proceedTocheckout().click();
  }
}
export default new Cart();
