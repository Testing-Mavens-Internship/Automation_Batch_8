export default class Common {
    constructor() {
        this.$homepageHeader = () => $(`//div[@class="main-logo"]`);
    }
    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url("https://www.akbartravels.com/in/flight?lan=en");
        // if(await $("#wzrk-confirm")){await $("#wzrk-confirm").click();}
    }
}
