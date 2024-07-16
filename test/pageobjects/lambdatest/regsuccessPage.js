import commonPage from "../lambdatest/common.js";

class regsuccessPage extends commonPage {
    constructor() {
        super();
        this.$header=()=> $('//i[@class="fas fa-check-circle text-success"]')
        this.$continueButton=()=> $('//a[normalize-space()="Continue"]')
    }

    async clickContinue() {
        await this.$continueButton().waitForDisplayed({timeout: 10000, timeoutMsg: "Continue button is not visible"});
        await this.$continueButton().click();
    }

}
export default new regsuccessPage()
