import commonPage from "./commonPage.js";

class Register extends commonPage {
    constructor() {
        super();
        this.$registrationheader = () => $(`//h1[text()="Register Account"]`);
        this.$firstname = () => $(`//input[@id="input-firstname"]`);
        this.$lastname = () => $(`//input[@id="input-lastname"]`);
        this.$email = () => $(`//input[@id="input-email"]`);
        this.$phone = () => $(`//input[@id="input-telephone"]`);
        this.$password = () => $(`//input[@id="input-password"]`);
        this.$confirmpassword = () => $(`//input[@id="input-confirm"]`);
        this.$subscriberadiobuttonlabel = () => $(`//label[@for='input-newsletter-yes']`);
        this.$termsandconditionlabel = () => $(`//label[@for='input-agree']`);
        this.$continuebutton = () => $(`//input[@class="btn btn-primary"]`);
        this.$successmessage = () => $(`//h1[@class="page-title my-3"]`);
        this.$successcontinue = ()=> $(`//a[text()="Continue"]`);

    }

    async registrationDetails() {

        const randnum = Math.floor(Math.random() * 200)+20;

        await this.$firstname().setValue("Aswin");
        await this.$lastname().setValue("Krishna");
        await this.$email().setValue(`aswin${randnum}@gmail.com`);
        await this.$phone().setValue(7898787878);
        await this.$password().setValue("qwert123");
        await this.$confirmpassword().setValue("qwert123");
        await this.$subscriberadiobuttonlabel().click(); 
        await this.$termsandconditionlabel().click(); 
        await this.$continuebutton().click();
    }
    async successcontinueclick(){
        await this.$successcontinue().click();
    }
}

export default new Register();
