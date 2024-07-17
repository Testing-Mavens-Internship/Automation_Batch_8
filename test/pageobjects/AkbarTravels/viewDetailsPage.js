import common from "./commonPage.js"
class Viewdetails extends common{
    constructor(){
        super();
        this.$viewDetailHeader =()=>$(`//div[@class="headings"]/h2`);
        this.$downloadPackage =()=>$(`//span[text()="Download Package"]`);
    }
    async clickOnDownloadPackage(){
        await this.$downloadPackage().click();
    }
}export default new Viewdetails();