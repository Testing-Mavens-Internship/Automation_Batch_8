import commonPage from "./commonPage.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const downloadDir= path.join(__dirname, 'testData')

class downloadPage extends commonPage{
    constructor() {
        super();
        this.$download=()=> $(`//div[@style="text-align: center;"]//a[normalize-space()="Download"]`)
    }

    async download() {
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
 
    //    if (fs.existsSync(filePath)) {
    //     fs.unlinkSync(filePath);
    //     }
 
        await this.$download().click();
 
        await browser.pause(3000)
 
        // if (fs.existsSync(filePath)) {
        //     console.log('File downloaded successfully:', filePath);
        // } else {
        //     throw new Error('File not downloaded');
        // }
    }
}
export default new downloadPage()