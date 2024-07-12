import Common from "./commonPage.js";

class Solution extends Common {
    constructor() {
        super();
        this.$solutionheader = () => $(`//h2[@class="rich-text__heading rte inline-richtext h1 scroll-trigger animate--slide-in"]`);
        this.$makeanenquiry = () => $(`//a[contains(text(),"MAKE AN ENQUIRY")]`);
        this.$acceptBanner = () => $(`#shopify-pc__banner__btn-accept`);
    }

    async clickMakeanEnquiry() {
        if (await this.$acceptBanner().isDisplayed()) {
            await this.$acceptBanner().click();
        }
        await this.$makeanenquiry().click();
    }
}

export default new Solution();
