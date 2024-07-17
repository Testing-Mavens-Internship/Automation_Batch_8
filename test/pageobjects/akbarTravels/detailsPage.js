import CommonPage from "./commonPage.js";

import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// const downloadDir= path.join(__dirname, 'testData')

class DetailsPage extends CommonPage{
    constructor(){
        super();
        this.$detailsHeader=()=>$('//div[@class="headings"]//h2');
        this.$downloadHeader=()=>$('//h2[text()="Download Package"]')
        this.$download=()=>$('//a[@class="btns download modal-trigger download-pkgs"]');
        this.$enterName=()=>$('//div[@id="download-package-content"]//input[@name="enqName"]');
        this.$email=()=>$('//div[@id="download-package-content"]//input[@name="enqEmail"]');
        this.$mobileNumber=()=>$('//div[@id="download-package-content"]//input[@name="enqMobile"]')
        this.$submit=()=>$('//button[text()="Submit"]');
        this.$downloadSuccess=()=>$('//p[text()="Thank you for Downloading package,package will download in few seconds.."]')
    }
    /**
     * To download click on the Download option
     */
    async clickDownload(){
        await this.$detailsHeader().waitForDisplayed({timeout:10000,timeoutMsg: 'page is not visible'});
        await this.$download().click();
    }
    /**
     * Randomly creating Email
     */

    async randomEmail(){
        let a= Math.floor(Math.random()*50);
        return `abc${a}@gmail.com`
    }
    /**
     * Entering name,email and phone number for downloading
     */
    async enterDetails(name,email,number){
        await this.$enterName().setValue(name);
        await this.$email().setValue(email);
        await this.$mobileNumber().setValue(number);
        
    }
    /**
     * click submit to download
     */
    async clickSubmit(){
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
    
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
        await this.$submit().click()
        await browser.pause(10000)
    }
}
export default new DetailsPage();