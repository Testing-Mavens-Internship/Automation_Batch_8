import Common from "./common.js";

class RegisterPage extends Common{
    constructor(){
        super();
        this.$registerData=(data)=>$(`//input[@name="${data}"]`);
        this.$profileInfo=(profileInfoData)=>$(`//select[@name="${profileInfoData}"]`);
        this.$english=()=>$(`//option[@value="english"]`);
        this.$dogsOption=()=>$(`//option[@value="DOGS"]`);
        this.$saveAccountInformation=()=>$(`//input[@value="Save Account Information"]`);
    }

    /**
     * Enter the details to register
     */
    async enterDetails(userID,newPassword,repeatPassword,fname,lname,email,phone,address1,address2,city,state,zip,country){
        await this.$registerData("username").setValue(userID);
        await this.$registerData("password").setValue(newPassword);
        await this.$registerData("repeatedPassword").setValue(repeatPassword);
        await this.$registerData("account.firstName").setValue(fname);
        await this.$registerData("account.lastName").setValue(lname);
        await this.$registerData("account.email").setValue(email);
        await this.$registerData("account.phone").setValue(phone);
        await this.$registerData("account.address1").setValue(address1);
        await this.$registerData("account.address2").setValue(address2);
        await this.$registerData("account.city").setValue(city);
        await this.$registerData("account.state").setValue(state);
        await this.$registerData("account.zip").setValue(zip);
        await this.$registerData("account.country").setValue(country);
        await this.$profileInfo("account.languagePreference").click();
        await this.$english().waitForDisplayed({timeout:5000,timeoutMsg:"English option is still not displayed"})
        await this.$english().click();
        await this.$profileInfo("account.favouriteCategoryId").click();
        await this.$dogsOption().waitForDisplayed({timeout:5000,timeoutMsg:"Dogs option is still not displayed"})
        await this.$dogsOption().click();
        await this.$registerData("account.listOption").click();
        await this.$registerData("account.bannerOption").click();
        await this.$saveAccountInformation().waitForDisplayed({timeout:2000,timeoutMsg:"save account information button is not displayed"});
    }

    /**
     * click on the save account information button
     */
    async clickSaveAccountInformationButton(){
        await this.$saveAccountInformation().waitForClickable({timeout:5000,timeoutMsg:"Save account information button is still not clicked"});
        await this.$saveAccountInformation().click();
    }
}
export default new RegisterPage()