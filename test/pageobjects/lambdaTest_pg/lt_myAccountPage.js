import CommonPage from "./lt_commonPage.js";

export class MyAccountPage extends CommonPage{
    constructor(){
        super();
        this.$accountHeader=()=>$(`//h2[text()="My Account"]`);
        this.$editAccInfo=()=>$(`//i[@class="fas fa-2x mb-1 fa-user-edit"]`)
        this.$successMsg=()=>$(`//div[@class="alert alert-success alert-dismissible"]`)
        this.$home=()=>$(`//span[normalize-space()="Home"]`)
    }
    async clickEdit(){
        await this.$editAccInfo().waitForDisplayed({timeout:5000,timeoutMsg:"Option still not displayed."});
        await this.$editAccInfo().click();
        
    }
    async clickHome(){
    await this.$home().waitForClickable({timeout:5000,timeoutMsg:"Option still not clicked."});
    await this.$home().click();
    }
}
export default new MyAccountPage();