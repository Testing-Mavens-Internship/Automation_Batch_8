import Common from "../index/common.js";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Download extends Common {
    constructor(){
        super();
            this.$downloadButton=()=>$(`//div[@class="cont_box"]//a[@class="btn btn-primary"]`);
    }

    async clickDownload(){
        await this.$downloadButton().click();
        await browser.pause(3000);
    }
    
    async downloadFile() {
        const downloadDir = path.resolve(__dirname, 'testdata');

        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        })
     
        await browser.waitUntil(
            async () => await this.$downloadCompleteIndicator.isDisplayed(),
            {
                // timeout: 60000,
                timeoutMsg: 'File download timeout'
            }
        );

        console.log('File downloaded successfully');
    }

}
export default new Download();