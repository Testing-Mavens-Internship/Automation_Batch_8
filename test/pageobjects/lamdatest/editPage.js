import Common from '../lamdatest/common.js';

export class Editpage extends Common {
    constructor(){
        super();
            this.$editAccount=()=>$(`//a[contains(@class,"d-inline-flex text")][normalize-space()="Edit your account information"]`);
    }

    async clickEditAccount(){
            await this.$editAccount().waitForClickable({timeout: 3000});
            await this.$editAccount().click();
    }
}

export default new Editpage();