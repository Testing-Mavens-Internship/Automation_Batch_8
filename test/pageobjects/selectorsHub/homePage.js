import  CommonPage from "./commonPage.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const downloadDir= path.join(__dirname, 'testData')
class HomePage extends CommonPage{
    constructor(){
        super();
        this.$pageHeader=()=>$('//a[text()="Find out how to automate these controls without XPath"]')
        this.$email=()=>$('//input[@name="email"]');
        this.$password=()=>$('//input[@id="pass"]');
        this.$company=()=>$('(//input[@name="company"])[1]');
        this.$number=()=>$('//input[@name="mobile number"]');
        this.$crush=()=>$('//input[@placeholder="First Crush"]');
        this.$detailsSubmit=()=>$('//button[@value="Submit"]');
        this.$firstName=()=>$('//input[@placeholder="First Enter name"]');
        this.$checkoutHere=()=>$('//button[@class="dropbtn"]');
        this.$checkoutDropDown=()=>$('//a[text()="Join Training"]');
        this.$chooseCar = () =>$('//select[@name="cars"]')
        this.$selectCar=()=>$('//option[@value="volvo"]')
        this.$usersTable=()=>$('//input[@value="25"]')
        this.$download=()=>$('//a[normalize-space()="Click to Download PNG File"]');
        this.$chooseFile=()=>$('//input[@type="file"]')


        this.$frame=()=>$('//iframe[@id="coming google"]');
        //this.$checkbox=()=>$('(//div[@class="AB7Lab Id5V1"])[2]');
        this.$submit=()=>$(`//span[@class="l4V7wb Fxmcue"]/span[text()='Submit']`);
        this.$frameHeader=()=>$('//div[text()="Cross Origin iframe Scenario"]');
        

    }
    /**
     * Entering user credentials
     */
    async enterDetails(email,password,company,number,crush){
            let mybutton = await this.$email();
            await browser.execute((element)=>{
                element.removeAttribute('readonly')
        },mybutton)

        await this.$email().setValue(email);
        await this.$password().setValue(password);
        await this.$company().setValue(company);
        await this.$number().setValue(number);
        await this.$crush().setValue(crush);
        await this.$detailsSubmit().click()

    }
    /**
     * entering the firstname and choosing car and checkbox
     */
    async checkOut(){
        await this.$firstName('maria');
        await this.$checkbox().click();
        await this.$checkoutDropDown().click();
        await this.$checkoutDropDown().click();
        await this.$chooseCar().click();
        await this.$selectCar().click();

    }
    /**
     * Uploading a file 
     */

    async uploadFile(){
        const filePath = 'testData/bug 1.png'
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.$chooseFile().setValue(remoteFilePath);

    }
    /**
     * Downloading file from the site
     */

    async download() {
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
        await this.$download().click();
        await browser.pause(5000);
    }

    /**
     * Switching into the iFrame
     */


    async accessIFrame(){
       
        await this.$frame().scrollIntoView()
        const iframe=await this.$frame()
        await browser.switchToFrame(iframe)
        await this.$checkbox().click()
        await this.$submit().click()
    }
    /**
     * Switching back to the parentFrame
     */
    async parentFrame()
    {
        await browser.switchToParentFrame()
    }
}
export default new HomePage();