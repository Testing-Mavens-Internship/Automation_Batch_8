import CommonPage from "./lt_commonPage.js";

export class AccountSuccessPage extends CommonPage{
    constructor(){
        super();
        this.$accCreatedMsg=()=>$(`//h1[@class="page-title my-3"]`)
        this.$continue=()=>$(`//a[@class="btn btn-primary"]`)
    }
    async clickContinue(){
        await this.$continue().waitForClickable({timeout:5000,timeoutMsg:"Button still not clicked."})
        await this.$continue().click();
    }
}
export default new AccountSuccessPage();