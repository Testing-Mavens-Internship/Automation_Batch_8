import CommonPage from "./commonPage.js";
class Upload extends CommonPage{
    constructor(){
        super();
        this.$chooseFile=()=>$('//input[@type="file"]')
    }
    /**
     * uploading a file to the site
     */
    async uploadFile(){
        const filePath = 'testData/bug 1.png'
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.$chooseFile().setValue(remoteFilePath);
    }
}
export default new Upload();