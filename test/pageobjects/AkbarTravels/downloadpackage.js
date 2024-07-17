import common from "./common.js";
class DownloadPackage extends common{
    constructor(){
        super()
        this.$downloadButton=()=>$(`//li[@class=" download-package "]/a`)
        this.$modalheader=()=>$(`//div[@class="modal-content"]/h2[normalize-space()="Download Package"]`)
    }
    async ClickOnDownloadPackage(){
        await this.$downloadButton().click();   
     }
     
}
export default new DownloadPackage();
