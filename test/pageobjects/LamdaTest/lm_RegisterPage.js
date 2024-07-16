import CommonPage from "./lm_CommonPage.js";

class RegisterPage extends CommonPage {
    constructor() {
        super();
        this.$RegisterFirstName = () => $('//input[@name="firstname"]');
        this.$RegisterLastName = () => $('//input[@name="lastname"]');
        this.$RegisterEmail = () => $('//input[@name="email"]');
        this.$RegisterTelephone = () => $('//input[@name="telephone"]');
        this.$RegisterPassword = () => $('//input[@name="password"]');
        this.$RegsiterConfirmPassword = () => $('//input[@name="confirm"]');
        this.$RegisterNewsletterYes = () => $('//input[@id="input-newsletter-yes"]');
        this.$RegisterNewsletterNo = () => $('//input[@id="input-newsletter-no"]');
        this.$agreeCheckbox = () => $('//label[@for="input-agree"]');
        this.$submitButton = () => $('//input[@type="submit"]');
    }

    async clickOnRegister() {
        await this.$hoverMyaccountIcon().moveTo();
        await this.$register().click();
    }

   
   
    async Register() {
        await this.$RegisterFirstName().setValue('Aiswarya');
        await this.$RegisterLastName().setValue('Anil');
        await this.$RegisterEmail().setValue('aiswarya55@gmail.com'); 
        await this.$RegisterTelephone().setValue('96547851256');
        await this.$RegisterPassword().setValue('LamdaTest@123');
        await this.$RegsiterConfirmPassword().setValue('LamdaTest@123');
        await this.$agreeCheckbox().click();
        await this.$submitButton().click();
    }
    
}

export default new RegisterPage();
