import commonPage from "./commonPage.js";

class loginPage extends commonPage{
    constructor() {
        super();
        this.$email=()=> $(`//input[@id="email"]`)
        this.$button=()=> $(`(//a[@href="Register.html"])[2]`)
    }

    async login(email) {
    await this.$email().setValue(email);
    await this.$button().waitForDisplayed({timeout: '10000'});
    await this.$button().click();
    }
}
export default new loginPage()