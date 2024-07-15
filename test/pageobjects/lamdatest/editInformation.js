import Common from '../lamdatest/common.js';

export class EditInfo extends Common {
    constructor(){
        super();
            this.$editLastname=()=>$(`//input[@id="input-lastname"]`);
            this.$continue=()=>$(`//input[@value="Continue"]`);
            this.$successfulUpdate=()=>$(`//div[contains(text(),"Success:")]`);
            this.$homeButton=()=>$(`//span[normalize-space()="Home"]`);

    }

    async lastName(lname){
            await this.$editLastname().setValue(`${lname}`);
    }

    async ClickContinueButton(){
            await this.$continue().waitForClickable({timeout: 5000});
            await this.$continue().click();
    }

    async clickHomeButton(){
        await this.$homeButton().click();
    }
}

export default new EditInfo();
