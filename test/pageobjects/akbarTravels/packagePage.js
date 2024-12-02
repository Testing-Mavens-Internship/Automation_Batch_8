import CommonPage from "./commonPage.js";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadDir= path.join(__dirname, 'testData')
 class packagePage extends CommonPage {
    constructor() {
        super();
        this.$header = () => $(`//div[@class="headings"]`);
        this.$downloadPackage=()=>$(`//a[@class="btns download modal-trigger download-pkgs"]`)
        this.$downloadMenuHeader=()=>$(`//h2[text()="Download Package"]`)
        this.$name=()=>$(`//div[@id="download-package-content"]//input[@name="enqName"]`)
        this.$email=()=>$(`//div[@id="download-package-content"]//input[@name="enqEmail"]`)
        this.$phone=()=>$(`//div[@id="download-package-content"]//input[@name="enqMobile"]`)
        this.$submitButton=()=>$(`//button[@id="pkgdwnldSubmitBtn"]`)
        this.$downloadSuccessMsg=()=>$(`//a[normalize-space()="OK"]`)
    }

    /**
     * Click on the download button
     */
    async downloadPackage(){
        await this.$downloadPackage().click();
    }
    /**
     * 
     * @param {string} name 
     * @param {*string} email 
     * @param {*phone} phone 
     */
    async enterDetails(name,email,phone){
        await this.$email().setValue(email);
        await this.$name().setValue(name);
        await this.$phone().setValue(phone);
    }
    
    /**
     * 
     * @param {string} filename 
     * @param {string} filePath
     */

    async downloadFile(){
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo2.pdf";
        const filePath = path.join(downloadDir, filename);
       
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
        await this.$submitButton().click();

        await browser.pause(3000)
    }
    /**
     * This is to verify download success message and CLick on the final OK button and 
     */

    async downloadSuccessMsg(){
        await this.$downloadSuccessMsg().click();
        await this.$header().waitForDisplayed({timeout: 2000}
            ,{timeoutMsg: "Download success message is not visible"})

            expect(await this.$header().isDisplayed())
            .withContext("Download success message should be visible")
    
    }
}
export default new packagePage()