import CommonPage from "./commonPage.js";
class CartPage extends CommonPage {

    constructor() {
    super();
    this.$cartPageHeader = () => $('//span[text()="Your Cart"]');
    this.$checkoutButton = () => $('//button[@id="checkout"]');
    }

    async clickCheckout() {
        await this.$checkoutButton().click();
    }
}export default new CartPage();