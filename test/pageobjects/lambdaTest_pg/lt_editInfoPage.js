import CommonPage from "./lt_commonPage.js";

export class EditInfoPage extends CommonPage{
    constructor(){
        super()
    
    }
    async editLastName(){
        await this.$lastName().waitForDisplayed({timeout:5000,timeoutMsg:"Input field still not displayed."});
        await this.$lastName().setValue("KK");
        await this.$continueButton().waitForClickable({timeout:5000,timeoutMsg:"Button still not clicked."});
        await this.$continueButton().click();
    }
}
export default new EditInfoPage();