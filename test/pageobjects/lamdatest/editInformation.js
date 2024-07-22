import Common from '../lamdatest/common.js';

export class EditInfo extends Common {
    constructor(){
        super();
            this.$editLastname=()=>$(`//input[@id="input-lastname"]`);
            this.$continue=()=>$(`//input[@value="Continue"]`);
            this.$successfulUpdate=()=>$(`//div[contains(text(),"Success:")]`);
            this.$homeButton=()=>$(`//span[normalize-space()="Home"]`);

    }
    /**
     * To enter last name
     * @param {string} lname 
     */
    async lastName(lname){
            await this.$editLastname().setValue(`${lname}`);
    }
    /**
     * To click on continue button
     */
    async ClickContinueButton(){
            await this.$continue().waitForClickable({timeout: 5000});
            await this.$continue().click();
    }
    /**
     * To click on home button
     */
    async clickHomeButton(){
        await this.$homeButton().click();
    }
}

export default new EditInfo();
