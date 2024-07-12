import Common from "./common.js";

class Contact extends Common
{
    constructor()
    {
        super()
        this.$contact_header=()=>$(`//h2[normalize-space()='Contact Us']`)
        this.$fullname=()=>$(`//input[@name='fname']`)
        this.$email=()=>$(`//input[@placeholder='Email']`)
        this.$phone=()=>$(`//input[@placeholder='Phone number']`)
        this.$message=()=>$(`//input[@placeholder='Message']`)
        this.$sendbtn=()=>$(`//button[normalize-space()='SEND']`)
        this.$thankyou=()=>$(`//h1[text()='THANK YOU!']`)
    }
    async enterDetails(fullname,email,phone,message)
    {
        await this.$fullname().waitForDisplayed({timeout:8000})
        await this.$fullname().setValue(fullname)
        await this.$email().waitForDisplayed({timeout:8000})
        await this.$email().setValue(email)
        await this.$phone().waitForDisplayed({timeout:8000})
        await this.$phone().setValue(phone)
        await this.$message().waitForDisplayed({timeout:8000})
        await this.$message().setValue(message)
        await this.$sendbtn().click()
    }
}
export default new Contact()