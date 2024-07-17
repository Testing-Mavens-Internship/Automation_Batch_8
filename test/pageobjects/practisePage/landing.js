import Common from '../practisePage/common.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Landing extends Common {
    constructor(){
        super();
            this.$productHeader=()=>$(`//a[@class="hfe-menu-item" and text()='Products']`);
            this.$googleForm=()=>$(`//iframe[@id="coming google"]`);
            this.$yesButton=()=>$(`//span[contains(text(),"Yes")]`);
            this.$enterEmail=()=>$(`//input[@name="email"]`);
            this.$enterPassword=()=>$(`//input[@name="Password"]`);
            this.$enterCompany=()=>$(`(//input[@class="form-control"])[1]`);
            this.$enterNumber=()=>$(`(//input[@name="mobile number"])[1]`);
            this.$submitButton=()=>$(`//button[text()="Submit"]`);
            this.$enterCrush=()=>$(`//input[@title="Enter your first crush name"]`);
            this.$fname=()=>$(`//input[@class="nameFld" and @placeholder="First Enter name"]`);
            this.$lname=()=>$(`//input[@class="nameFld" and @placeholder="Enter Last name"]`);
            // this.$dropDownButton=()=>$(`//button[text()="Checkout here"]`);
            // this.$selectOption=()=>$(`//a[text()="Join Training"]`);
            this.$uploadFile=()=>$(`//input[@id="myFile"]`);
            this.$downloadFile=()=>$(`//a[normalize-space()="Click to Download PNG File"]`)

    }
    /**
     * To enter details
     */
    async enterDetails(){
        let exampleButton = await this.$enterEmail();
        await browser.execute((element)=>{
            element.removeAttribute('readonly')
        },exampleButton)

        await this.$enterEmail().setValue('aleena123@gmail.com');
        await this.$enterPassword().setValue('Aleena@123');
        await this.$enterCompany().setValue(`Testing Mavens`);
        await this.$enterNumber().setValue(7510817131);
        await this.$submitButton().click();
        await this.$enterCrush().setValue('Dinu');
        // await this.$dropDownButton().click();
        // await this.$selectOption().click();

        // let disabled = await this.$fname();
        // await browser.execute((element)=>{
        //     element.removeAttribute('disabled')
        // },disabled)

        // await this.$fname().setValue('Aleena');
        
        // let disabledButton = await this.$lname();
        // await browser.execute((element)=>{
        //     element.removeAttribute('disabled')
        // },disabledButton)

        // await this.$lname().setValue('Shaji');
    }
    /**
     * To upload a file
     */
    async fileUpload() {
        const filePath = 'uploadFile/photo.jpg'
        const remoteFilePath = await browser.uploadFile(filePath)
        await this.$uploadFile().setValue(remoteFilePath)
        await browser.pause(5000);
       
    }
    /**
     * To click download 
     */
    
    /**
     * To download a file
     */
    async fileDownload(){
        
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
    
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
        await this.$download().click();
        await browser.pause(3000)

    }

    /**
     * To switch to a frame
     */
    async googleForm() {
        await this.$googleForm().scrollIntoView();
        await browser.switchToFrame(await this.$googleForm()); 
    }
    /**
     * To click on Yes Button
     */
    async clickYesButton(){
        await this.$yesButton().waitForClickable({timeout: 5000});
        await this.$yesButton().click();
        await browser.pause(6000);
    }
    /**
     * To switch back to the parent frame
     */
    async switchingToParentFrame(){
        await browser.switchToParentFrame()
    }
}

export default new Landing();