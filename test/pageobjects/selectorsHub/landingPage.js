import commonPage from "./commonPage.js";

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadDir= path.join(__dirname, 'testData')

class landingPage extends commonPage{
    constructor() {
        super();
        this.$header=()=>$(`//a[text()="Find out how to automate these controls without XPath"]`)
        this.$gFormEyeFrame=()=>$('//iframe[@id="coming google"]')
        this.$checkBox=()=>$(`//span[@class="aDTYNe snByac OvPDhc OIC90c" and text()="Yes"]`)
        this.$submitGform=()=>$(`//div[@class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]`)
        this.$email=()=>$(`//input[@name="email"]`)
        this.$password=()=>$(`//input[@id="pass"]`)
        this.$company=()=>$(`(//input[@name="company"])[1]`)
        this.$mobiile=()=>$(`(//input[@name="mobile number"])[1]`)
        this.$submit=()=>$(`//button[@value="Submit"]`)
        this.$crush=()=>$(`//input[@id="inp_val"]`)
        this.$fnameActivation=()=>$(`//*[local-name()="svg" and @viewBox="0 0 224 24"]`)
        this.$firstName=()=>$(`//input[@placeholder="First Enter name"]`)
        this.$lastName=()=>$(`//input[@placeholder="Enter Last name"]`)
        this.$uploadFile=()=>$(`//input[@id="myFile"]`)
        this.$downloadFile=()=>$(`//a[normalize-space()="Click to Download PNG File"]`)
    /**
     * Function to switch to G Form
     */

    }
    async switchTogForm(){
        await this.$gFormEyeFrame().scrollIntoView();
        const frame= await this.$gFormEyeFrame();
        // const iframe= await browser.findElement(frame,'iframe')
        await browser.switchToFrame(frame)
        // await browser.pause(1000)
    }
    /**
     * Function to fill the Google Form
     */
    async fillgForm(){
        // await this.$checkBox().scrollIntoView({block: 'center', inline: 'center'})
        await this.$checkBox().waitForClickable({timeout: 5000, timeoutMsg: "Check box is not clickable"})
        await this.$checkBox().click()
        await this.$submitGform().waitForClickable({timeout: 5000, timeoutMsg: "Submit button is not clickable"})
        await this.$submitGform().click()
        await browser.switchToParentFrame()
    }

    /**
     * Function to fill the form in landing Page
     */
    async fillForm(email, password, company, mobile, crush){
        let mybutton = await this.$email();
        await browser.execute((element)=>{
            element.removeAttribute('readonly')
    },mybutton)

        await this.$email().setValue(email);
        await this.$password().setValue(password);  
        await this.$company().setValue(company);
        await this.$mobiile().setValue(mobile);
        await this.$crush().setValue(crush);
        await this.$submit().click();

    }

    /**
     * Function to fill the restricted form
     */


    async fillRestForm(fname,lname){
        await this.$fnameActivation().click()
        await this.$firstName().setValue(fname)
        // await this.$lastName().setValue(lname)
    }

    /**
     * Function to Upload and Download form
     */

    async uploadFile(){
        const filePath='testData/new.pdf'
        const remoteFilePath= await browser.uploadFile(filePath)
        await this.$uploadFile().setValue( remoteFilePath)
        await this.$submit().click()
    }

    async downloadFile(){
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo2.pdf";
        const filePath = path.join(downloadDir, filename);
        await this.$downloadFile().click();
        await browser.pause(3000)

        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
    }
     
}
export default new landingPage