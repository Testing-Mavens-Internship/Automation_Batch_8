import CommonPage from "./commonPage.js";
import path from "path";

 class packagePage extends CommonPage{
    constructor() {
        super();
        this.$downloadButton = () => $(`//span[text()="Download Package"]`);
        this.$name = () => $(`//div[@id="download-package-content"]//input[@name="enqName"]`)
        this.$email = () => $(`//div[@id="download-package-content"]//input[@name="enqEmail"]`)
        this.$phone = () => $(`//div[@id="download-package-content"]//input[@name="enqMobile"]`)
        this.$submitButton = () => $(`//button[@id="pkgdwnldSubmitBtn"]`)
        this.$okButton = () => $(`//a[text()="OK"]`)
        this.$thankYouForDownloadingMsg=()=>$(`//p[text()="Thank you for Downloading package,package will download in few seconds.."]`);
    }
    async enterDetails(name, email, phone) {
        await this.$downloadButton().waitForDisplayed({timeout:5000,timeoutMsg:"Button not displayed."})
        await this.$downloadButton().scrollIntoView();
        await this.$downloadButton().moveTo();
        await this.$downloadButton().click();
        await this.$email().setValue(email);
        await this.$name().setValue(name);
        await this.$phone().setValue(phone);
    }
    /**
     * To download the package details of the selected Package.
     */
    async download() {
        const downloadDir = path.join(process.cwd(), 'testData');
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        
        });
        await this.$thankYouForDownloadingMsg().waitForDisplayed({timeout:5000,timeoutMsg:"Message not displayed."});
    }
}
export default new packagePage()