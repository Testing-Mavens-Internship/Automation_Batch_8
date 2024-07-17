import Common from "./common.js";
import path from 'path';
class Confirmation extends Common {
    constructor() {
        super();
        this.$Downloadbtn = () => $(`//span[text()="Download Package"]`);
        this.$name = () => $(`//div[@id="download-package-content"]//input[@name="enqName"]`)
        this.$email = () => $(`//div[@id="download-package-content"]//input[@name="enqEmail"]`)
        this.$phone = () => $(`//div[@id="download-package-content"]//input[@name="enqMobile"]`)
        this.$submitButton = () => $(`//button[@id="pkgdwnldSubmitBtn"]`)
        this.$okbtn = () => $(`//a[text()="OK"]`)
    }
    async enterDetails(name, email, phone) {
        await this.$Downloadbtn().scrollIntoView();
        await this.$Downloadbtn().moveTo();
        await this.$Downloadbtn().click();
        await this.$email().setValue(email);
        await this.$name().setValue(name);
        await this.$phone().setValue(phone);
    }

    async Download() {
        const downloadDir = path.join(process.cwd(), 'testData');
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
    }
}
export default new Confirmation();