import MavenCommon from "./common.js";
class ContactUs extends MavenCommon{
    constructor(){
        super()
        this.$header=()=>$(`//span[normalize-space()='MavenKonnect']`)
        this.$thankuHeader=()=>$(`//h1[normalize-space()='THANK YOU!']`)
        this.$username=()=>$(`//input[@type='text' and @placeholder="Full Name "] `)
        this.$Email=()=>$(`//input[@type='email' and @placeholder="Email"] `)
        this.$number=()=>$(`//input[@type='text' and @placeholder="Phone number"] `)
        this.$message=()=>$(`//input[@type='text' and @placeholder="Message"] `)
        this.$button=()=>$(`//button[normalize-space()='SEND']`)
        this.$icon=()=>$(`//i[@class='fa fa-user']`)
        
    }
    async Enterdetails1(fname,email,contact,message){
        await this.$username().setValue(fname)
        await this.$Email().setValue(email)
        await this.$number().setValue(contact)
        await this.$message().setValue(message)
        await this.$button().click();



   }

//     async Enterdetails2(){
//         await this.$username().setValue("Patrick")
//         await this.$Email().setValue("Patrick333@gmail.com")
//         await this.$number().setValue("9638523211")
//         await this.$message().setValue("Hello")
//         await this.$button().click();


//     }
//     async Enterdetails3(){
//         await this.$username().setValue("Peter")
//         await this.$Email().setValue("Peter123@gmail.com")
//         await this.$number().setValue("9638527411")
//         await this.$message().setValue("Hello")
//         await this.$button().click();


// }
async ClickOnUserIcon(){
    await this.$icon().click();
}

}
export default new ContactUs();