import commonPage from "./commonPage.js";
class regsuccessPage extends commonPage {
    constructor() {
        super();
        this.$header=()=> $(`//h1[normalize-space()="My Account Information"]`)
        this.$lname=()=> $(`//input[@id="input-lastname"]`)
        this.$continue=()=> $(`//input[@value="Continue"]`)
    }

    async changeLastName() {
        await this.$lname().setValue("Starker");
    }

    async clickContinue() {
        await this.$continue().waitForDisplayed({timeout: 10000, timeoutMsg: "Header is not visible"});
        await this.$continue().click();

    }

  
}
export default new regsuccessPage()