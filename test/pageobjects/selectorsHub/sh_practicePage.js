import CommonPage from "./sh_CommonPage.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const downloadDir= path.join(__dirname, 'testData')

export class PracticePage extends CommonPage{
    constructor(){
        super();
        this.$emailField=()=>$(`//input[@dataid="sh_email1"]`);
        this.$passwordField=()=>$(`//input[@id="pass"]`);
        this.$companyNameField=()=>$(`(//input[@placeholder="Enter your company"])[1]`);
        this.$phoneNumberfield=()=>$(`(//input[@name="mobile number"])[1]`);
        this.$submitButton=()=>$(`//button[@value="Submit"]`);
        this.$firstCrushField=()=>$(`//input[@placeholder="First Crush"]`);
        this.$chooseFileOption=()=>$(`//input[@id="myFile"]`);
        this.$download=()=>$(`//a[normalize-space()="Click to Download PNG File"]`);
        this.$GoogleFormFrames=()=>$(`//iframe[@id="coming google"]`);
        this.$yesButton=()=>$(`//span[contains(text(),"Yes")]`);
        this.$googleFormHeader=()=>$(`//div[text()="Cross Origin iframe Scenario"]`);


    }
    async enterDetails(){
        let exampleButton = await this.$emailField();
        await browser.execute((element)=>{
            element.removeAttribute('readonly')
        },exampleButton)

        await this.$emailField().setValue("krishna@gmail.com");
        await this.$passwordField().setValue("2224519@Kpgm");
        await this.$companyNameField().setValue("Testing Mavens");
        await this.$phoneNumberfield().setValue("9698445678");
        await this.$submitButton().click();
        await this.$firstCrushField().setValue("Aiswarya");
        

        
    }
    async fileUpload(){
        const filePath = 'hello.txt'
    const remoteFilePath = await browser.uploadFile(filePath)
    await this.$chooseFileOption().setValue(remoteFilePath)
    await browser.pause(5000);
    }
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

    //async switchForm(){
      //  await this.$frames().scrollIntoView();
        //await browser.switchToFrame(await this.$frames());
        //await this.$yes().waitForClickable({timeout:5000,timeoutMsg:"Option not yet Clicked."});
        //await this.$yes().click()
    //}

}
export default new PracticePage();