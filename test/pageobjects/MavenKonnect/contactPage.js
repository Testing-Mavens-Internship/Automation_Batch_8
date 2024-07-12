import Common from "./common.js";

class ContactPage extends Common{
    constructor(){
        super();
        this.$username=()=>$(`//input[@placeholder="Full Name "]`);
        this.$email=()=>$(`//input[@placeholder="Email"]`);
        this.$phoneNumber=()=>$(`//input[@placeholder="Phone number"]`);
        this.$message=()=>$(`//input[@placeholder="Message"]`);
        this.$Sendbtn=()=>$(`//button[contains(text(),"SEND ")]`);
        this.$contactHeader=()=>$(`//h2[contains(text(),"Contact ")]`);
    }
    async enteringDetails(payDetails){
        await this.$username().setValue(payDetails.firstname);
        await this.$email().setValue(payDetails.email);
        await this.$phoneNumber().setValue("6282052811");
        await this.$message().setValue("hai");
        await this.$Sendbtn().click();
    }
}
export default new ContactPage();