import CommonPage from "../../pageobjects/demoAutomation/common.js";
class DownloadPage extends CommonPage{
    constructor(){
        super();
       this.$enterData = () => $('//textarea[@id="textbox"]')
       this.$generateFile = () => $('//button[@id="createTxt"]')
       this.$downloadLink = () => $('//a[@id="link-to-download"]')
       this.$downloadButton = () => $('//a[@type="button" and text()="Download"]')
}
       async downloadFile()
       {
           await this.$downloadButton().click();
           await this.$enterData().setValue('file')//this is a random file name -- u can give any
           await this.$generateFile().click();
           await this.$downloadLink().click();
       }
    }


    

export default new DownloadPage()
