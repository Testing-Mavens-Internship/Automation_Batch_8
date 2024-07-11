import CommonPl from "./pl_common.js";
class HomePage extends CommonPl{
    constructor(){
        super()
        this.$userIcon=()=>$(`//*[name()='svg' and @viewBox="0 0 320 512"]`)
        this.$logout=()=>$(`//li[normalize-space()='Log Out']`)
        this.$clickshop=()=>$(`//a[normalize-space()='Shop']`)
    }
    async clickOnUserIcon(){
       await this.$userIcon().click();

    }
    async clickOnShop(){
        for(let i=1;i<=3;i++){
            
        }
        await this.$clickshop().click();
    }
}
export default new HomePage();