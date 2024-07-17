import Commonakbartravels from "./akbarTravelsCommon.js";
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
 
const downloadDir= path.join(__dirname, 'testData')

class Downloadakbartravels extends Commonakbartravels
{
    constructor()
    {
        super()
        this.$downloadpackageoption=()=>$('//span[@class="text"][text()="Download Package"]')
        this.$downloadheader=()=>$('//span[@class="text"][text()="Download Package"]')
        this.$name=()=>$('//input[@id="pkgenqName"]')
        this.$email=()=>$('//input[@id="pkgenqEmail"]')
        this.$mob=()=>$('//input[@id="pkgenqMobile"]')
        this.$submit=()=>$('//button[@id="pkgdwnldSubmitBtn"]')
        this.$modal=()=>$('//a[@class="successbtn  modal-close"]')
        this.$forvalidation=()=>$('//h3[text()="Bus"]')
        
    }

    /**
     * Click on downloadpackage
     */
    async downloadclick()
    {
        await this.$downloadpackageoption().click();
    }

    /**
     * Enter details and submit download prompt
     */
    async downloaddetailsenter(name,mail,num)
    {
        await this.$name().setValue(name)
        await this.$email().setValue(mail)
        await this.$mob().setValue(num)
        
    }

    /**
     * Download the document
     */
    async download() 
    {
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
   
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
        await this.$submit().click();
        await this.$modal().click()
    
}

}
export default new Downloadakbartravels()