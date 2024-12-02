import commonPage  from "./commonPage.js";

class registerPage extends commonPage {
    constructor() {
        super();
        this.$header=()=> $(`//h1[normalize-space()="Register Account"]`)
        this.$firstName=()=> $(`//input[@name="firstname"]`)
        this.$lastName=()=> $(`//input[@name="lastname"]`)
        this.$email=()=> $(`//input[@name="email"]`)
        this.$telephone=()=> $(`//input[@name="telephone"]`)
        this.$password=()=> $(`//input[@name="password"]`)
        this.$confirmPassword=()=> $(`//input[@name="confirm"]`)
        this.$agreeCheckbox=()=> $(`//div[@class="custom-control custom-checkbox custom-control-inline"]`)
        this.$continueButton=()=> $(`//input[@value="Continue"]`)
    }

    async register(firstName, lastName, email, telephone, password, confirmPassword) {
        await this.$firstName().setValue(firstName);
        await this.$lastName().setValue(lastName);
        await this.$email().setValue(email);
        await this.$telephone().setValue(telephone);
        await this.$password().setValue(password);
        await this.$confirmPassword().setValue(confirmPassword);
        await this.$agreeCheckbox().click();
        await this.$continueButton().click();
    } 
    async clearFilter() {
        await this.$filterClear().click();
    }
}

export default new registerPage()