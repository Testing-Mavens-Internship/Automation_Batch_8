import CommonPage from "./mk_commonPage.js";

export class contactUsPage extends CommonPage{
    constructor(){
        super();
        this.$name=()=>$(`//input[@placeholder="Full Name "]`)
        this.$email=()=>$(`//input[@placeholder="Email"]`)
        this.$phoneNo=()=>$(`//input[@placeholder="Phone number"]`)
        this.$message=()=>$(`//input[@placeholder="Message"]`)
        this.$sendButton=()=>$(`//button[normalize-space()="SEND"]`)
        this.$thankYouMsg=()=>$(`//h1[text()="THANK YOU!"]`)
    }
    async enterDetails(name,email,phoneNo,message){
        await this.$name().setValue(name)
        await this.$email().setValue(email)
        await this.$phoneNo().setValue(phoneNo)
        await this.$message().setValue(message)
        await this.$sendButton().click()
        // await browser.waitUntil(
        //    async() =>await browser.isAlertOpen(),
        //     {
        //         timeout: 10000, 
        //         timeoutMsg: 'Expected alert to be displayed'
        //     }
        // );
        if(await browser.isAlertOpen())        await browser.acceptAlert();
        await this.$thankYouMsg().waitForDisplayed({timeout:6000,timeoutMsg:"Thankyou message not displayed."})

    }
    }

export default new contactUsPage();