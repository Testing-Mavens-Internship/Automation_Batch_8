import mkcommon from "./mkCommon.js";

class ContactUsPage extends mkcommon {
 
    constructor()
    {
        super();
        this.$fullname = () => $('//input[contains(@placeholder, "Full Name")]')
        this.$email = () => $('//input[@placeholder="Email"]')
        this.$phoneNumber = () => $('//input[@placeholder="Phone number"]')
        this.$message = () => $('//input[@placeholder="Message"]')
        this.$sendButton = () => $('//button[normalize-space(text())="SEND"]')
        this.$thankYouHeader = () =>$('//h1[contains(text(),"THANK YOU")]')
       
       
       
    }
 
 
    async enterdetails(name,mail,ph,msg)
    {
        
        await this.$fullname().setValue(name);
        await this.$email().setValue(mail);
        await this.$phoneNumber().setValue(ph);
        await this.$message().setValue(msg);
        await this.$sendButton().click();
    }

}
 
export  default new ContactUsPage();