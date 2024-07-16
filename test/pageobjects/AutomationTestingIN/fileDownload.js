import Common from "./common.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const downloadDir=path.join(__dirname,"testData");


class FileDownload extends Common{
    constructor(){
        super();
        this.$header=()=>$(`//h2[text()="File Download Demo for Automation"]`);
        this.$download=()=>$(`//a[text()="Download" and @type="button"]`);
        this.$data=()=>$(`//textarea[@id="textbox"]`);
        this.$generateFilebutton=()=>$(`//button[@id="createTxt"]`)
    }

    /**
     * download file function
     */
    async downloadFile(){
        const downloadDir=path.join(process.cwd(),"testData");
        const filename="demo.pdf";
        const filePath = path.join(downloadDir, filename);

        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });

        await this.$download().click();
        await browser.pause(5000);

    }

    /**
     * Enter data to generate file
     * @param {*string} data 
     */
    async enterData(data){
        await this.$data().setValue(data)
    }
}
export default new FileDownload()