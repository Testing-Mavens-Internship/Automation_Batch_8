import CommonPage from "./sh_CommonPage.js";

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const downloadDir= path.join(__dirname, 'testDataTwo')

class LandingPage extends CommonPage {


    constructor()
    {
        super();
        this.$iframeHeader =() =>$('//div[text()="Cross Origin iframe Scenario"]')
        this.$iframeLocator = () =>$('//iframe[@id="coming google"]')
        this.$iframeYes = () =>$('(//div[@class="AB7Lab Id5V1"])[1]')
        this.$iframeSubmit = () =>$('//span[@class="NPEfkd RveJvd snByac" and text()="Submit"]')

        this.$findXpathHeader = () =>$('//a[text()="Find out how to automate these controls without XPath"]')
        this.$email = () =>$('//input[@name="email"]')
        this.$password = () =>$('//input[@name="Password"]')
        this.$company = () =>$('(//input[@name="company"])[1]')
        this.$phone = () =>$('//input[@name="mobile number"]')
        this.$submitButton = () =>$('//button[@value="Submit"]')
        this.$firstCrush = () =>$('//input[@placeholder="First Crush"]')
        this.$firstEnterName = () =>$('//input[@placeholder="First Enter name"]')
        this.$chooseCar = () =>$('//select[@name="cars"]')
        this.$chooseSpecificCar = () =>$('//option[@value="audi"]')
        this.$date = () =>$('//input[@type="date"]')
        this.$checkoutButton = () =>$('//button[text()="Checkout here"]')
        this.$checkoutJoinTraining = () =>$('//a[text()="Join Training"]')
        this.$chooseFile = () =>$('//input[@type="file"]')
        this.$download = () =>$('//a[normalize-space(text())="Click to Download PNG File"]')

        
    }

  
/**
 * Fill the first form in the website
 */
    async fillFormOne()
    {

        let mybutton = await this.$email();
        await browser.execute((element)=>{
        element.removeAttribute('readonly')},mybutton)

        await this.$email().setValue('aishwarya@gmail.com')
        await this.$password().setValue('Xpath@1234');
        await this.$company().setValue('Testing Mavens');
        await this.$phone().setValue(9562557426);
        await this.$firstCrush().setValue('Dinu Joy');
        await this.$submitButton().click();

    }

    /**
     * Fill the second side of the form in the website
     */
    async fillFormTwo()
    {
       
        await this.$chooseCar().click();
        await this.$chooseSpecificCar().click();
        await this.$checkoutButton().moveTo();
        await this.$checkoutJoinTraining().click();
    }

/**
 * upload a file in the website
 */
    async fileUpload() {
 
        await this.$chooseFile().scrollIntoView({ block: 'center', inline: 'center' });
        const filePath = 'upload/uploadimg.png'
        const remoteFilePath = await browser.uploadFile(filePath)
        await this.$chooseFile().setValue(remoteFilePath)
        await browser.pause();
       
        }

        /**
         * download a file from the website
         */

     async downloadFile() {

        await this.$download().scrollIntoView({ block: 'center', inline: 'center' });
            const downloadDir = path.join(process.cwd(), 'testDataTwo');
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
      * fill the form in the iframe
      */
    async iframeFormFill()
    {
        await this.$iframeLocator().scrollIntoView({ block: 'center', inline: 'center' });
        const iframe =await this.$iframeLocator();
        await browser.switchToFrame(iframe)
        await this.$iframeYes().click();
        await this.$iframeSubmit().click();
    }

    /**
     * Switch back to the parent window
     */
    async parentIframeSwitch()
    {
        await browser.switchToParentFrame();
    }







}

export default new LandingPage();