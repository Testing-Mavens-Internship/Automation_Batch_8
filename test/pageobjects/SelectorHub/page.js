import CommonPage from "./commonPage.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const downloadDir= path.join(__dirname, 'testData')

class Page extends CommonPage {

    constructor()
    {
        super()
        //section 1
        this.$userEmail=()=> $('//input[@name="email"]')
        this.$password=()=> $('//input[@placeholder="Enter Password"]')
        this.$company=()=> $('//input[@placeholder="Enter your company"]')
        this.$mobileNumber=()=> $('(//input[@placeholder="Enter your mobile number"])[1]')
        this.$firstCrush=()=> $('//input[@placeholder="First Crush"]')
        this.$submitBtn=()=> $('//button[text()="Submit"]')
        //section 2
        this.$checkoutBtn=()=> $('//button[text()="Checkout here"]') //hover
        this.$joinTrainingOption=()=> $('//a[text()="Join Training"]') //expect, click
        this.$chooseAcar=()=> $('//select[@id="cars"]')  //click
        this.$carOption=()=> $('//option[text()="Audi"]') //expect, click
        this.$pickAdate=()=> $('//input[@type="date"]') //click
        this.$selectDate=()=> $('')
        //upload
        this.$chooseFile=()=> $('//input[@id="myFile"]')
        //download
        this.$downloadLink=()=> $('//a[@href="https://selectorshub.com/wp-content/uploads/2023/12/Mega-sale-600-%C3%97-360-px-30.png"]')
        //iframe
        this.$iframeWindow=()=> $('//iframe[@id="coming google"]')
        this.$iframeHeader=()=> $('//div[text()="Cross Origin iframe Scenario"]')
        this.$checkBox=()=> $('//div/span[text()="No"]')
        this.$formSubmit=()=> $('//span/span[text()="Submit"]')
    }

    /**
     * Enter values in text input fields
     */
    async enterValues()
    {
        let e = await this.$userEmail()
        await browser.execute((element) => {
            element.removeAttribute('readonly')
        }, e)
        await this.$userEmail().setValue("athira123@gmail.com")
        await this.$password().setValue("Athira@123")
        await this.$company().setValue("Testing Mavens")
        await this.$mobileNumber().setValue(9876543210)
        await this.$firstCrush().setValue("Dinu")
        await this.$submitBtn().click()
    }

    /**
     * Hovering on "Checkout here" option
     */
    async hoverCheckoutDropdown()
    {
        await this.$checkoutBtn().moveTo()
    }

    /**
     * Select an option from "Checkout here" option
     */
    async selectOptionFromCheckout()
    {
        await this.$joinTrainingOption().click()
    }

    /**
     * Click on "Choose a car" dropdown
     */
    async clickChooseAcarDropdown()
    {
        await this.$chooseAcar().click()
    }

    /**
     * Select an option from "Choose a car" dropdown
     */
    async selectOptionFromCar()
    {
        await this.$carOption().click()
    }

    /**
     * Upload a file
     */
    async uploadFile()
    {
        //await this.$chooseFile().scrollIntoView()
        const filePath = 'upload/Bug_ID#2.PNG'
        const remoteFilePath = await browser.uploadFile(filePath)
        await this.$chooseFile().setValue(remoteFilePath)
    }

    /**
     * Download a file
     */
    async downloadFile()
    {
        const downloadDir = path.join(process.cwd(), 'testData')
        const filename = "file.png"
        const filePath = path.join(downloadDir, filename)
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        })
        await this.$downloadLink().scrollIntoView()
        await this.$downloadLink().click()
        await browser.pause(1000)
    }

    /**
     * Accessing the iframe at the bootom of the page
     */
    async accessIframe()
    {
        await this.$iframeWindow().scrollIntoView()
        const iframe=await this.$iframeWindow()
        await browser.switchToFrame(iframe)
        await this.$checkBox().click()
        await this.$formSubmit().click()
    }

    /**
     * Switching back to the parent frame
     */
    async backToParent()
    {
        await browser.switchToParentFrame()
    }
}

export default new Page()
