import CommonPage from "./commonPage.js";
class Account extends CommonPage{
    constructor(){
        super();
        this.$edit=()=>$('//i[@class="fas fa-2x mb-1 fa-user-edit"]');
        this.$accountHeader=()=>$('//li[@class="breadcrumb-item active"]');
        this.$success=()=>$('//div[@class="alert alert-success alert-dismissible"]')
        this.$home=()=>$('//span[normalize-space()="Home"]')
    }
    async clickEdit(){
        await this.$edit().click();
    }
    async clickHome(){
        await this.$home().click();
    }
}
export default new Account();