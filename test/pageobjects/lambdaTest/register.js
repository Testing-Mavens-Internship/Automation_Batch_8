import CommonPage from "./commonPage.js"; 
class Register extends CommonPage{
    constructor(){
        super();
        this.$registerHeader=()=>('//h1[text()="Register Account"]');
        this.$firstName=()=>('//input[@name="firstname"]');
        this.$lastName=()=>('//input[@name="lastname"]');
        this.$email=()=>('//input[@name="email"]');
        this.$phone=()=>('//input[@placeholder="Telephone"]')
        this.$password=()=>('//input[@name="password"]');
        this.$confirmPassword=()=>('//input[@name="confirm"]');
        this.$privacy=()=>('//label[@for="input-agree"]');
        this.$submit=()=>('//input[@type="submit"]');
    }
    async enterDetails(firstname,lastname,email,phone,password,confirmPassword){
        await this.$firstName().setValue(firstname);
        await this.$lastName().setValue(lastname);
        await this.$email().setValue(email);
        await this.$phone().setValue(phone);
        await this.$password().setValue(password);
        await this.$confirmPassword().setValue(confirmPassword);
        await this.$privacy().click();
        await this.$submit().click();
    }


}
export default new Register();