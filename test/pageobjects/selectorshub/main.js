import Common from "./common.js";
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const downloadDir=path.join(__dirname,'testData')

class Main extends Common
{
    constructor()
    {
        super()
        this.$iframewindow=()=>$(`//iframe[@id="coming google"]`)
        this.$checkbox1=()=>$(`#i5`)
        this.$submit=()=>$(`//span[@class="l4V7wb Fxmcue"]/span[text()='Submit']`)
        this.$iframeheading=()=>$(`//div[text()='Cross Origin iframe Scenario']`)
        this.$email=()=>$(`//input[@name="email"]`)
        this.$password=()=>$(`//input[@name="Password"]`)
        this.$company=()=>$(`(//input[@placeholder="Enter your company"])[1]`)
        this.$mobile=()=>$(`(//input[@name="mobile number"])[1]`)
        this.$crush=()=>$(`#inp_val`)
        this.$submitbtn=()=>$(`//button[text()='Submit']`)
        this.$checkoutbtn=()=>$(`//button[text()='Checkout here']`)
        this.$dropdwncontent=()=>$(`//div[@class="dropdown-content"]/a[text()='SHub Youtube Channel']`)
        this.$edit=()=>$(`//*[name()='svg' and @onclick="nameField()"]`)
        this.$firstname=()=>$(`//input[@class="nameFld" and @placeholder="First Enter name"]`)
        this.$cardropdown=()=>$(`//select[@name="cars"]`)
        this.$car=()=>$(`//select[@name="cars"]/option[text()='Audi']`)
        this.$calendar=()=>$(`//input[@name="the_date"]`)
        this.$user=()=>$(`//table[@id="resultTable"]/tbody/tr/descendant::input[@id="ohrmList_chkSelectRecord_25"]`)
        this.$choosefile=()=>$(`//input[@id="myFile"]`)
        this.$download=()=>$(`//a[normalize-space()='Click to Download PNG File']`)
    }

    /**
     * Method to enter details in the form
     */
    async enterDetails()
    {
        let e= await this.$email()
        await browser.execute((ele)=>{
            ele.removeAttribute('readonly')
        },e)
        await this.$email().setValue('abc@gmail.com')
        await this.$password().setValue('123456')
        await this.$company().setValue('ABC Company')
        await this.$mobile().setValue('1234567890')
        await this.$crush().setValue('xyz')
        await this.$submitbtn().click()
    }

    /**
     * Method to enter value in a disabled field
     */
    async enterName()
    {
        await this.$edit().click()
        await this.$firstname().waitForDisplayed({timeout:5000})
        await this.$firstname().setValue('pqr')
    }

    /**
     * Method to select an option by hovering the Checkout button
     */
    async dropdownfn()
    {
        await this.$checkoutbtn().moveTo()
        await this.$dropdwncontent().waitForDisplayed({timeout:5000})
        await this.$dropdwncontent().click()
        await this.$cardropdown().click()
        await this.$car().click()
    }

    /**
     * Select checkbox in Users table
     */
    async selectUsersTable()
    {
        await this.$user().click()
    }

    /**
     * Upload a file
     */
    async uploadFile()
    {
        await this.$choosefile().scrollIntoView({ block: 'center', inline: 'center' })
        const filepath='uploads/sample.txt'
        const relativefilepath=await browser.uploadFile(filepath)
        await this.$choosefile().setValue(relativefilepath)
        // await this.$choosefile().click()
    }

    /**
     * Download a file
     */
    async downloadFile()
    {
        const downloadDir=path.join(process.cwd(),'testData')
        const filename='new.png'
        path.join(downloadDir,filename)
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath : downloadDir
        })
        await this.$download().click()
        await browser.pause(3000)
    }

    /**
     * Switch to iframe and fill the google form which is present within the iframe
     */
    async validateframe()
    {
        await this.$iframewindow().scrollIntoView()
        const iframe=await this.$iframewindow()
        await browser.switchToFrame(iframe)
        await this.$checkbox1().click()
        await this.$submit().click()
    }

    /**
     * Switch back to parent window from iframe
     */
    async backtoparent()
    {
        await browser.switchToParentFrame()
    }
}
export default new Main()