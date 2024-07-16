import commonlambda from "./lt-Common.js";
class editaccountlambda extends commonlambda
{
    constructor()
    {
        super()
        this.$continuebtnnxtpg=()=>$('//a[@class="btn btn-primary"]')
        this.$editpageheader=()=>$('//li[@class="breadcrumb-item active"]')
        this.$editopt=()=>$('//a[@class="d-inline-flex text-decoration-none text-reset flex-column my-3"]//i[@class="fas fa-2x mb-1 fa-user-edit"]')
        this.$lastnameinput=()=>$('//input[@name="lastname"]')
        this.$editedandcontinuebtn=()=>$('//input[@value="Continue"]')
        this.$editsuccessvalidation=()=>$('//div[@class="alert alert-success alert-dismissible"][text()=" Success: Your account has been successfully updated."]')
       
    }
    async clkcontnu()
    {
        await this.$continuebtnnxtpg().waitForClickable({timeout:3000})
        await this.$continuebtnnxtpg().click()
    }
    async edit()
    {
        await this.$editopt().waitForClickable({timeout:7000})
        await this.$editopt().click();
        await this.$lastnameinput().setValue("Paul")
        await this.$editedandcontinuebtn().waitForClickable({timeout:3000})
        await this.$editedandcontinuebtn().click()
    }
}
export default new editaccountlambda()