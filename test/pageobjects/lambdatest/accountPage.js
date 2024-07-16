import commonPage from "../lambdatest/common.js";

class accountPage extends commonPage {
    constructor() {
        super();
        this.$header=()=> $('//h2[normalize-space()="My Account"]')
        this.$editAccount=()=> $('//a[normalize-space()="Edit Account"]')
        this.$successAlert=()=> $('//div[@class="alert alert-success alert-dismissible"]')
        this.$homeIcon=()=> $('//span[normalize-space()="Home"]/ancestor::a')
    }
/**
 * for editing account
 */
    async clickEditAccount() {
        await this.$editAccount().waitForDisplayed({timeout: 10000, timeoutMsg: "Edit Account button is not visible"});
        await this.$editAccount().click();
    }

    async clickHomeIcon() {
        await this.$homeIcon().waitForDisplayed({timeout: 10000, timeoutMsg: "Home icon is not visible"});
        await this.$homeIcon().click();
    }

}

export default new accountPage()