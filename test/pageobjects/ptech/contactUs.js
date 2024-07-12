import Common from "./commonPage.js";

class Contactus extends Common {
    constructor() {
        super();
        this.$contactheader = () => $(`//div[@class="rich-text__blocks left"]/h2`);
        this.$cart = () => $(`//*[local-name()="svg" and @viewBox="0 0 40 40"]`);
    }

    async clickCart() {
        const cartElement = this.$cart();
        await cartElement.waitForDisplayed({ timeout: 4000, timeoutMsg: 'Cart icon not displayed' });
        await cartElement.click();
    }
}

export default new Contactus();
