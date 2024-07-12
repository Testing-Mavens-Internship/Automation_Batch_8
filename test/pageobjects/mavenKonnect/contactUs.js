import Common from "../mavenKonnect/common.js"

export class ContactUs extends Common {
    constructor(){
        super();
            this.$fullName=()=>$(`//input[@type="text" and @placeholder="Full Name "]`);
            this.$email=()=>$(`//input[@type="email" and @placeholder="Email"]`);
            this.$number=()=>$(`//input[@type="text" and @placeholder="Phone number"]`);
            this.$message=()=>$(`//input[@type="text" and @placeholder="Message"]`);
            this.$sendButton=()=>$(`//button[normalize-space()="SEND"]`);
    }
    async enterDetails(name,email,number,message){
        await this.$fullName().setValue(name);
        await this.$email().setValue(email);
        await this.$number().setValue(number);
        await this.$message().setValue(message);
        await this.$sendButton().click();
    }

    }
export default new ContactUs();