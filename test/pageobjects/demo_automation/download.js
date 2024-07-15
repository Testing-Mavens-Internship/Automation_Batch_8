import Common from "./common.js";
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const downloadDir=path.join(__dirname,'testData')

class Download extends Common{
    constructor()
    {
        super()
        this.$download=()=>$(`//a[text()='Download' and @class="btn btn-primary"]`)
        this.$text=()=>$(`//textarea[@id="textbox"]`)
        this.$generate=()=>$(`//button[@id="createTxt"]`)
        this.$downloadlink=()=>$(`//a[@id="link-to-download"]`)
    }
    async selectDownload()
    {
        const downloadDir=path.join(process.cwd(),'testData')
        const filename='demo.pdf'
        path.join(downloadDir,filename)

        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath : downloadDir
        })

        await this.$download().click()
        await browser.pause(3000)
    }
    // async generateText()
    // {
    //     await this.$text().setValue('Hello everyone')
    //     await this.$generate().click()
    //     await this.$downloadlink().click()
    // }
}
export default new Download()