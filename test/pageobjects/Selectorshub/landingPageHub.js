import CommonSelectorhub from "./selectorhubCommon.js";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

class EnteringCredentials extends CommonSelectorhub{
    constructor(){
        super()
        this.$useremail=()=>$(`//input[@name="email"]`)
        this.$userpassword=()=>$(`//input[@id="pass"]`)
        this.$company=()=>$(`(//label[text()="Company"]/following::input[@name="company"])[1]`)
        this.$phonenumber=()=>$(`(//label[text()="Mobile Number"]/following::input[@placeholder="Enter your mobile number"])[1]`)
        this.$submit=()=>$(`//button[@value="Submit"]`)
        this.$crush=()=>$(`//input[@id="inp_val"]`)

        //Entering firstname and lastname
        this.$firstName=()=>$(`//input[@placeholder="First Enter name"]`)
        this.$lastName=()=>$(`//input[@placeholder="Enter Last name"]`)
        
        //Usefull Links
        this.$checkout=()=>$(`//button[@class="dropbtn"]`)
        this.$checkoutOption=()=>$(`//a[text()="SHub Youtube Channel"]`)

        //choose file
        this.$chooseFile=()=>$(`//input[@id="myFile"]`)

        //download file
        this.$download=()=>$(`//a[normalize-space()="Click to Download PNG File"]`)

        //iframe
        this.$iframe=()=>$(`//iframe[@id="coming google"]`)
        this.$yesButton=()=>$(`//div[@class="Od2TWd hYsg7c"]`)
        this.$submitbutton=()=>$(`//div[@class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]`)
        this.$iframeHeader=()=>$(`//div[@class="F9yp7e ikZYwf LgNcQe"]`)

    }
    /**
     * Method to enter details
     */

    async enteringDetails(){
       // document.getElementById("onfocus").removeAttribute("readonly");
       let remove = await this.$useremail();
        await browser.execute((element)=>{
            element.removeAttribute('readonly')
        },remove) 
        
        await this.$useremail().setValue("sidharth1@gmail.com")  
        await this.$userpassword().setValue("123456")
        await this.$company().setValue("soda company");
        await this.$phonenumber().setValue("9638527412")
        await this.$submit().click();
        await this.$crush().setValue("#####")

    }

    async enteringNames(){
        let removeDisabled=await this.$userpassword();
        await browser.execute((element)=>{
            element.removeAttribute("disabled")
        },removeDisabled)
        await this.$firstName().setValue("Sidharth")
        await this.$lastName().setValue("malhotra")
    }

    async UsefullLinks(){
        await this.$checkout().click();
        await this.$checkoutOption().click();
        await browser.pause(5000)
    }

    async fileUpload(){
        const filepath='./expTest/Sidharth_KS_Resume (1).pdf'
        const remotefilepath=await browser.uploadFile(filepath)
        await this.$chooseFile().setValue(remotefilepath)
        await browser.pause(10000)

    }

    async downloadFile(){
        const downloadDir=path.join(process.cwd(),"expTest")
        const filename="demo.pdf";
        await this.$download().click();
        await browser.pause(5000)

        await browser.cdp('page','setDownloadBehavior',{
            behavior:'allow',
            downloadPath:downloadDir
        })

    }

    /**
     * Method to Switchto iframe
     */


    async  iframe(){
        await this.$iframe().scrollIntoView()
        const frame=await this.$iframe()
        await browser.switchToFrame(frame)
        await this.$yesButton().click();
        await this.$submitbutton().click();
        

    }
    /**
     * Method to exit from iframe
     */
    async backtoParent(){
        await browser.switchToParentFrame();

    }
    
}
export default new EnteringCredentials();
