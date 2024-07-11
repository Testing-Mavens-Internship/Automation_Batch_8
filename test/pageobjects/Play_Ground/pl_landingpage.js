import CommonPl from "./pl_common.js";
class UserIcon extends CommonPl{
    constructor(){
        super()

       this.$icon=()=>$(`//div[@class="flex items-center cursor-pointer space-x-2"]//*[name()='svg' and @viewBox='0 0 448 512']`) ;
       this.$login=()=>$(`//li[normalize-space()='Login']`);
    }
    async clickOnUserIcon(){
        await this.$icon().click();
    }

    async clickOnLogin(){
       // await this.$login().waitForDisplay({timeout:5000,timeoutMsg:"Not displayed"});
        await this.$login().click();
    }
    
}
export default new UserIcon();