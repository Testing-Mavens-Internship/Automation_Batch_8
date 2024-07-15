import Common from "./common.js";

class MyAccount extends Common{
    constructor(){
        super()
        this.$editAccount=()=>$(`//a[text()=" Edit your account information"]`);
        this.$successfullEditMessage=()=>$(`//div[text()=" Success: Your account has been successfully updated."]`);
        this.$homeOption=()=>$(`//span[normalize-space()="Home"]`);
    }
    async clickEditInfo(){
        await this.$editAccount().click();
    }
    async clickHome(){
        await this.$homeOption().click();
    }
}
export default new MyAccount()