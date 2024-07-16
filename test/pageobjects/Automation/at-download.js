import commonauto from "./at-common.js";
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
 
const downloadDir= path.join(__dirname, 'testData')

class download extends commonauto
{
    constructor()
    {
        super()
        this.$downloadone=()=>$('//a[@type="button"]')
        this.$textenter=()=>$('//textarea[@id="textbox"]')
        this.$generate=()=>$('//button[@id="createTxt"]')
        this.$dld=()=>$('//a[@id="link-to-download"]')
    }
    async download() {
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
   
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
        await this.$downloadone().click();
        await browser.pause(3000)
    }
}
export default new download()