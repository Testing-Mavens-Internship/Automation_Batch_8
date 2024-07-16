import CommonPage from "./commonPage.js";
class Edit extends CommonPage{
    constructor(){
        super();
        this.$editHeader=()=>$('//li[@class="breadcrumb-item active"]');
        this.$lastName=()=>$('//input[@id="input-lastname"]');
        this.$continue=()=>$('//input[@value="Continue"]')
    }
    async changeLastName(name){
        await this.$lastName().setValue(name);
        await this.$continue().click();
    }
}
export default new Edit();