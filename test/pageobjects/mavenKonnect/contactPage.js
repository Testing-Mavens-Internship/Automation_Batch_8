import CommonPage from "./commonPage.js";


export class ContactPage extends CommonPage {
    constructor(){
        super();
            this.$name=()=>$(`//input[@type="text" and @placeholder="Full Name "]`);
            this.$email=()=>$(`//input[@type="email" and @placeholder="Email"]`);
            this.$number=()=>$(`//input[@type="text" and @placeholder="Phone number"]`);
            this.$message=()=>$(`//input[@type="text" and @placeholder="Message"]`);
            this.$send=()=>$(`//button[normalize-space()="SEND"]`);
    }
    async enterDetails(name,email,number,message){
        await this.$name().setValue(name);
        await this.$email().setValue(email);
        await this.$number().setValue(number);
        await this.$message().setValue(message);
        await this.$send().click();
    }

    }
export default new ContactPage();