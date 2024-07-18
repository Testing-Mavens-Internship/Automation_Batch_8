import CommonPage from "./commonPage.js";

class DownloadPage extends CommonPage {

    constructor()
    {
        super()
        this.$header=()=> $('//h2[text()="File Download Demo for Automation"]')
        this.$downloadBtn=()=> $('(//a[text()="Download"])[1]')
        this.$textBox=()=> $('//textarea[@id="textbox"]')
        this.$generateFile=()=> $('(//button[text()="Generate File"])[1]')
        this.$downloadLink=()=> $('//a[@id="link-to-download"]')
    }

    async clickDownload()
    {
        await this.$downloadBtn().click()
        await browser.pause(5000)
    }

    async enterTextAndDownload()
    {
        await this.$textBox().setValue("file1")
        await browser.pause(1000)
        await this.$generateFile().click()
        await browser.pause(1000)
        await this.$downloadLink().click()
    }

    async download() {
    const downloadDir = path.join(process.cwd(), 'testData');
    const filename = "demo.pdf";
    const filePath = path.join(downloadDir, filename);
   
    await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
    }

}

export default new DownloadPage()