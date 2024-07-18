import commonPage from "./commonPage.js";
import hoodiePage from "./hoodiePage.js";


class LandingPage extends commonPage {
    constructor() {
        super();
        this.$header = () => $(`//a[@class="logo"]`);
        this.$menCatogory = () => $(`//a[@id="ui-id-5"]`);
        this.$topsCatogory = () => $(`//a[@id="ui-id-17"]`);
        this.$hoodieCatogory = () => $(`//a[@id="ui-id-20"]`);
    }

    async loadUrl() {
        await browser.url('https://magento.softwaretestingboard.com/');
        await browser.maximizeWindow();

        await this.$header().waitForDisplayed({
            timeout: 2000,
            timeoutMsg: "Header is not visible"
        });
    }
    
}
export default new LandingPage();


