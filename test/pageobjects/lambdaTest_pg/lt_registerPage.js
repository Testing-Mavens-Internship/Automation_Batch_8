import CommonPage from "./lt_commonPage.js";

export class RegisterPage extends CommonPage{
    constructor(){
        super();
        this.$registerHeader=()=>$(`//h1[normalize-space()="Register Account"]`);
        this.$firstName=()=>$(`//input[@id="input-firstname"]`);
        this.$email=()=>$(`//input[@id="input-email"]`);
        this.$telephone=()=>$(`//input[@id="input-telephone"]`);
        this.$password=()=>$(`//input[@id="input-password"]`);
        this.$confirmPassword=()=>$(`//input[@id="input-confirm"]`);
        this.$policyCheckBox=()=>$(`//label[@for="input-agree"]`)
    }
    async createAccount(){
        await this.$firstName().setValue("Krishna");
        await this.$lastName().setValue("K");
        await this.$email().setValue("krishna123467kii1I1k@gmail.com");
        await this.$telephone().setValue("9898556738");
        await this.$password().setValue("2224519@Kpgm");
        await this.$confirmPassword().setValue("2224519@Kpgm");
        await this.$policyCheckBox().waitForClickable({timeout:5000,timeoutMsg:"Checkbox still not clicked."})
        await this.$policyCheckBox().click()
        await this.$continueButton().waitForClickable({timeout:5000,timeoutMsg:"Button still not clicked"});
        await this.$continueButton().click()
    }
}
export default new RegisterPage();