export default class Common {
    constructor() {
        this.$homepageHeader = () => $(`//div[@class="main-logo"]`);
    }
    /**
     * To lad url of the page
     */
    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url("https://www.akbartravels.com/in/flight?lan=en");
        await $("#wzrk-confirm").click();
        await homePage.$homepageHeader().waitForDisplayed({ timeout: time, timeoutMsg: "Homepage is not loaded." });
    }
}
