import Common from "./common.js";

class Register extends Common{
    constructor(){
        super();
        this.$registerHeader=()=>$(`//h1[text()="Register Account"]`);
        this.$fname=()=>$(`//input[@name="firstname"]`);
        this.$lname=()=>$(`//input[@name="lastname"]`);
        this.$email=()=>$(`//input[@name="email"]`);
        this.$phone=()=>$(`//input[@name="telephone"]`);
        this.$password=()=>$(`//input[@name="password"]`);
        this.$confirmPassword=()=>$(`//input[@name="confirm"]`);
        this.$checkBox=()=>$(`//label[contains(text(),"read")]`);
        this.$continuebtn=()=>$(`//input[@type="submit"]`);
    }
async registration(){
    await this.$fname().setValue("Solomon");
    await this.$lname().setValue("Joseph");
    await this.$email().setValue("solomon243joph@g.com");
    await this.$phone().setValue("6282052811");
    await this.$password().setValue("Solo@123");
    await this.$confirmPassword().setValue("Solo@123");
    await this.$checkBox().click();
    await this.$continuebtn().click(); 
}
}
export default new Register();