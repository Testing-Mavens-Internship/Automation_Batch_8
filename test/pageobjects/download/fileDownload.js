import CommonPage from "../automationTesting/at_commonPage.js";

export class FileDownload extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$(`//h2[text()="File Download Demo for Automation"]`);
        this.$downloadButton=()=>$(`//a[text()="Download"]`)

    }
    async downloadFile(){
        await this.$downloadButton().click();
    }
}
export default new FileDownload();