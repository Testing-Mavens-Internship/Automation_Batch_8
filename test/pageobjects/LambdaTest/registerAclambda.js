import CommmonLambda from "./common_lambda.js";
class RegisterAccount extends CommmonLambda{
    constructor(){
        super()
        this.$headerRegister=()=>$(`//h1[normalize-space()='Register Account']`)
        this.$firstname=()=>$(`//input[@id="input-firstname"]`)
        this.$lastname=()=>$(`//input[@id="input-lastname"]`)
        this.$email=()=>$(`//input[@id="input-email"]`)
        this.$telephone=()=>$(`//input[@id="input-telephone"]`)
        this.$password=()=>$(`//input[@id="input-password"]`)
        this.$confirmpassword=()=>$(`//input[@id="input-confirm"]`)
        this.$checkbox=()=>$(`//div[@class="float-right"]//label`)
        this.$continue=()=>$(`//input[@type="submit"]`)
        this.$headercreated=()=>$(`//h1[normalize-space()="Your Account Has Been Created!"]`)
        
        }
        async EnteringDetails(uniqueEmail){
            await this.$firstname().setValue("Sidharth")
            await this.$lastname().setValue("malhotra")
            await this.$email().setValue(uniqueEmail)
            await this.$telephone().setValue("9876543211")
            await this.$password().setValue("qwerty123")
            await this.$confirmpassword().setValue("qwerty123")
            await this.$checkbox().click();
            await this.$continue().click();

        }


        async 

}
export default new RegisterAccount();
