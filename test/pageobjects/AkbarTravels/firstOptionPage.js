import Common from "./common.js"
import path from "path";
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const downloadDir= path.join(__dirname, 'testData')

class FirstOptionPage extends Common {

    constructor()
    {
        super()
        this.$header=()=> $('//div[@class="headings"]')
        this.$downloadPackageBtn=()=> $('//span[text()="Download Package"]')
        this.$downloadPackageHeader=()=> $('//h2[text()="Download Package"]')
        this.$name=()=> $('//input[@id="pkgenqName"]')
        this.$email=()=> $('//input[@id="pkgenqEmail"]')
        this.$mobNumber=()=> $('//input[@id="pkgenqMobile"]')
        this.$submitBtn=()=> $('//button[@id="pkgdwnldSubmitBtn"]')
        this.$successMsg=()=> $('//p[text()="Thank you for Downloading package,package will download in few seconds.."]')
        this.$okBtn=()=> $('//a[text()="OK"]')
    }

    /**
     * Click on the 'Download Package' button
     */
    async clickDownloadPackage()
    {
        await this.$downloadPackageBtn().click()
    }

    /**
     * Enter details in 'Download Package' window and download the package
     */
    async enterDetails(name, email, mobNumber)
    {
        const downloadDir = path.join(process.cwd(), 'testData')
        const filename = "file.png"
        const filePath = path.join(downloadDir, filename)
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        })
        await this.$name().setValue(name)
        await this.$email().setValue(email)
        await this.$mobNumber().setValue(mobNumber)
        await this.$submitBtn().click()
    }
}

export default new FirstOptionPage()
