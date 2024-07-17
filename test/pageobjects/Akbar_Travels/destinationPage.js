
import CommonPage from "./commonPage.js";

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const downloadDir= path.join(__dirname, 'PackageDownload')
class FoodPackagePage extends CommonPage {

    constructor()
    {
        super();
        
       
       this.$classicVietnam = () => $('//div[@class="headings"]/h2[text()="Classic Vietnam"]')
       this.$downloadPackage = () => $('//span[@class="text"][text()="Download Package"]')
       this.$name =() => $('(//input[@name="enqName"])[1]')
       this.$email =() => $('(//input[@name="enqEmail"])[1]')
       this.$mobile =() => $('(//input[@name="enqMobile"])[1]')
       this.$submitButton =() => $('(//button[@type="submit"])[1]')
       this.$clickOk = () => $('//a[@class="successbtn  modal-close" and text()="OK"]')
    }

    /**
     * Click on the download package button
     */
    async clickOnDownloadPackage()

    {
        await this.$downloadPackage().click();
      
       
    }
    /**
     * Fill details on the download package form
     */

    async filldetails()
    {

        await this.$name().setValue('Riya Johnson')
        await this.$email().setValue('riya@gmail.com')
        await this.$mobile().setValue(9854412674)

        const downloadDir = path.join(process.cwd(), 'PackageDownload');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
    
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir});

        await this.$submitButton().click()
        await this.$clickOk().click()
        

    }

    
    
}

export default new FoodPackagePage();