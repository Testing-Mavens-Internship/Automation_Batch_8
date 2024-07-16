import Common from "./common.js";
import register from "./register.js";

class Account extends Common{
    constructor(){
        super();
        this.$editAccount=()=>$(`//a[contains(text(),"Edit your")]`);
        this.$successMsg=()=>$(`//div[contains(text(),"Success")]`);
        this.$homeTab=()=>$(`//span[contains(text()," Home")]`);
        this.$trending=()=>$(`//h3[text()="Top Trending Categories"]`);
    }
    async editingAccount(){
        await this.$editAccount().click();
        await register.$lname().setValue("A");
        await register.$continuebtn().click();
        await this.$successMsg().waitForDisplayed({timeout:5000,timeoutMsg:"User data editing is not successful"})

    }
    async retutningToHomepage(){
        await this.$homeTab().click();
        await this.$trending().waitForDisplayed({timeout:4000,timeoutMsg:"Homepage is not loading"})
    }
}
export default new Account();