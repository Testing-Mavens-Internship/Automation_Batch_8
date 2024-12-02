import commonPage from "./commonPage.js";

class landingPage extends commonPage {
    constructor() {
        super();
        this.$header=()=> $(`//a[@title="Poco Electro"]`)
        this.$myAccount=()=> $(`//span[normalize-space()="My account"]//ancestor::li[@class="nav-item dropdown dropdown-hoverable"]`)
        this.$loginButton=()=> $(`//a[contains(@href,"login")]`)
        this.$registerButton=()=> $(`//a[contains(@href,"register")]`)
        this.$firstProduct=()=>$(`//div[@id="mz-category-wall74213250"]//div[@class="swiper-slide swiper-slide-active"]`)
        this.$topTrending=()=>$(`//h3[normalize-space()="Top Trending Categories"]`)
    }

    async hoverMyAccount() {

        await this.$myAccount().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        const account = await this.$myAccount();
        await account.moveTo();
    }

    async clickRegister() {
    
        await this.$registerButton().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        await this.$registerButton().click();
    }

    async clickLogin() {
        await this.$loginButton().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        await this.$loginButton().click();
    }

    async clsickOnFirstTresndingProduct() {
        await this.$topTrending().waitForDisplayed({ timeout: 10000, timeoutMsg: "Header is not visible" });
        await this.$firstProduct().click();
    }



}
export default new landingPage()