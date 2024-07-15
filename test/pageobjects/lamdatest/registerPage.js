import Common from '../lamdatest/common.js';

export class Registerpage extends Common {
    constructor(){
        super();
            this.$registerHeader=()=>$(`//h1[text()="Register Account"]`);
            this.$firstName=()=>$(`//input[@id="input-firstname"]`);
            this.$lastName=()=>$(`//input[@id="input-lastname"]`);
            this.$email=()=>$(`//input[@id="input-email"]`);
            this.$telephone=()=>$(`//input[@id="input-telephone"]`);
            this.$password=()=>$(`//input[@id="input-password"]`);
            this.$confirmPassword=()=>$(`//input[@id="input-confirm"]`);
            this.$checkBox=()=>$(`//div[@class="custom-control custom-checkbox custom-control-inline"]`);
            this.$clickContinue=()=>$(`//input[@value="Continue"]`);    
    }

    async enterDetails(fname,lname,email,telephone,password,confirmPassword){
            await this.$firstName().setValue(fname);
            await this.$lastName().setValue(lname);
            await this.$email().setValue(email);
            await this.$telephone().setValue(telephone);
            await this.$password().setValue(password);
            await this.$confirmPassword().setValue(confirmPassword);
            await this.$checkBox().click();
            await this.$clickContinue().waitForClickable();
            await this.$clickContinue().click();
    }
}

export default new Registerpage();






