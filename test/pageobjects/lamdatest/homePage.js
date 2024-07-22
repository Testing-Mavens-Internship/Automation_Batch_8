import Common from '../lamdatest/common.js';

export class HomePage extends Common {
    constructor(){
        super();
            this.$firstItem=()=>$(`(//figure[@class="figure img-top"])[1]`);      
    }
    /**
     * To select the first product
     */
    async clickFirstItem(){
            await this.$firstItem().waitForClickable({timeout: 5000})
            await this.$firstItem().click();
    }
}

export default new HomePage();