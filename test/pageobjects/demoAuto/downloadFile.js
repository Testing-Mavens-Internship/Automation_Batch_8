import CommonPage from "./commonPage.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const downloadDir= path.join(__dirname, 'testData')

class DownloadPage extends CommonPage{
    constructor() {
        super();
        this.$download=()=> $('//div[@style="text-align: center;"]//a[normalize-space()="Download"]')
    }

    async download() {
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
    
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });


        await this.$download().click();

        await browser.pause(3000)

    }
}
export default new DownloadPage()