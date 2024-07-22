import Common from '../lamdatest/common.js';

export class Success extends Common {
    constructor(){
        super();
            this.$successMsg=()=>$(`//h1[@class="page-title my-3"]`);
            this.$continueButton=()=>$(`//div[@class="buttons mb-4"]/a`);
    }

    /**
     * To click on continue button
     */
    async clickContinue(){
            await this.$continueButton().waitForClickable({timeout: 3000});
            await this.$continueButton().click();
    }
}

export default new Success();