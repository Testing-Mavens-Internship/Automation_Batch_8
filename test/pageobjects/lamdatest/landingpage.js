import Common from './common.js';

export class LandingPage extends Common {
    constructor(){
        super();
            this.$myAccountHeader=()=> $(`(//span[normalize-space()="My account"])[2]`);
            this.$register=()=> $(`//span[normalize-space()="Register"]`);
    }

    async myAccount(){
            await this.$myAccountHeader().moveTo();
    }

    async clickRegister(){
            await this.$register().waitForClickable({timeout: 5000});
            await this.$register().click();
    }
}

export default new LandingPage();