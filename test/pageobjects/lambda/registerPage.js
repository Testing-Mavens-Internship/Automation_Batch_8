import Common from "./common.js";

class RegisterPage extends Common{
    constructor(){
        super();
        this.$header=()=> $(`//h1[normalize-space()="Register Account"]`);
        this.$firstName=()=> $(`//input[@name="firstname"]`);
        this.$lastName=()=> $(`//input[@name="lastname"]`);
        this.$email=()=> $(`//input[@name="email"]`);
        this.$telephone=()=> $(`//input[@name="telephone"]`);
        this.$password=()=> $(`//input[@name="password"]`);
        this.$confirmPassword=()=> $(`//input[@name="confirm"]`);
        this.$agreeCheckbox=()=> $(`//div[@class="custom-control custom-checkbox custom-control-inline"]`);
        this.$continueButton=()=> $(`//input[@value="Continue"]`);
    }
    
    /**
     * Enter registration details
     * @param {*string} firstName 
     * @param {*string} lastName 
     * @param {*string} email 
     * @param {*number} telephone 
     * @param {*number} password 
     * @param {*number} confirmPassword 
     */
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
}
export default new RegisterPage()