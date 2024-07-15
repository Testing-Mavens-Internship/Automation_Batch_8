import CommmonLambda from "./common_lambda.js";
class AccountEdit extends CommmonLambda{
    constructor(){
        super()
        this.$continueto=()=>$(`//a[normalize-space()="Continue"]`)
        this.$editaccount=()=>$(`//div[@class="col-6 col-sm-4 col-lg-2_4"]/a/i[@class="fas fa-2x mb-1 fa-user-edit"]`)
        this.$editLname=()=>$(`//input[@id="input-lastname"]`)
        this.$continuebtn=()=>$(`//input[@class="btn btn-primary"]`)
        this.$message=()=>$(`//div[@class="alert alert-success alert-dismissible"]`)

    }
    
    async ClickingOnContinue(){
        await this.$continueto().click();
    }

    async ClickingOnEditAccount(){
        await this.$editaccount().click();
    }

    
    async editingLastName(){
        await this.$editLname().setValue("sidh")
        await this.$continuebtn().click();

    }
}
export default new AccountEdit();