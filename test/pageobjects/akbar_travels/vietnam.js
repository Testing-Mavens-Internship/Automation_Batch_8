import Common from "./common.js";
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const downloadDir=path.join(__dirname,'testData')

class Vietnam extends Common
{
constructor()
{
    super()
    this.$vietnam_header=()=>$(`//div[@class="headings"]/h2`)
    this.$download=()=>$(`//a[@class="btns download modal-trigger download-pkgs"]`)
    this.$name=()=>$(`//input[@id="pkgenqName"]`)
    this.$email=()=>$(`//input[@id="pkgenqEmail"]`)
    this.$mobile=()=>$(`//input[@id="pkgenqMobile"]`)
    this.$submit=()=>$(`//button[@id="pkgdwnldSubmitBtn"]`)
    this.$ok=()=>$(`//a[text()='OK']`)
    this.$download_header=()=>$(`//h2[text()='Download Package']`)
}
async download()
{
    await this.$download().click()
    await this.$name().setValue('test')
    await this.$email().setValue('test123@gmail.com')
    await this.$mobile().setValue('1234567890')

    const downloadDir=path.join(process.cwd(),'testData')
    const filename='abcd.pdf'
    path.join(downloadDir,filename)

    await browser.cdp('Page', 'setDownloadBehavior', {
        behavior: 'allow',
        downloadPath : downloadDir
    })

    await this.$submit().click()
    await this.$ok().click()
    await browser.pause(5000)
}
}
export default new Vietnam()