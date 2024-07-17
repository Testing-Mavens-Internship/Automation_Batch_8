import common from "./sh_Commonpage.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const downloadDir= path.join(__dirname, 'testData')

class Landing extends common {
    constructor() {
        super();
        this.$emaillabel = () => $(`//label[text()="User Email"]`);
        this.$email = () => $('//input[@title="Email"]');
        this.$pswdfield = () => $(`//input[@id="pass"]`);
        this.$companyfield = () => $(`//div[@class="userform"]/child::div[not(preceding-sibling::div)]//input[@name="company"]`);
        this.$phonenumfield = () => $(`//div[@class="userform"]/child::div[not(preceding-sibling::div)]//input[@name="mobile number"]`);
        this.$submitbutton = () => $(`//button[text()="Submit"]`);
        this.$firstcrushfield = () => $(`//input[@id="inp_val"]`);
        this.$disabledFirstNameField = () => $(`//input[@name="test" and @placeholder="First Enter name"]`);
        this.$checkOutHere = () => $(`//button[text()="Checkout here"]`);
        this.$joinTrainingOption = () => $(`//a[text()="Join Training"]`);
        this.$chooseFile =() => $(`//input[@id="myFile"]`);
        this.$download =() => $(`//a[@style="font-size: 20px; color:blue"]`);
    }

    async enterUserDetails() {
        let mybutton = await this.$email();
        await browser.execute((element) => {
            element.removeAttribute("readonly");
        }, mybutton);
        const num = Math.floor(Math.random() * 200) + 1;
        await this.$email().setValue("aswin@gmail.com");
        await this.$pswdfield().setValue("qwerqwer123");
        await this.$companyfield().setValue("abc company");
        await this.$phonenumfield().setValue(67876787878);
        await this.$firstcrushfield().setValue("x");
        await this.$submitbutton().click();
    }

    async enterDetailsInDisabledFields() {
        let mybutton = await this.$disabledFirstNameField();
        await mybutton.waitForExist({ timeout: 5000 });
        await mybutton.waitForDisplayed({ timeout: 5000 });

        await browser.execute((element) => {
            element.removeAttribute("disabled");
        }, mybutton);

        await this.$disabledFirstNameField().setValue('Aswin');
    }

    async clickCheckOutHere() {
        try {
            await this.$checkOutHere().scrollIntoView();
            await this.$checkOutHere().waitForDisplayed();
            await this.$checkOutHere().moveTo();
            await this.$joinTrainingOption().waitForDisplayed();
            await this.$joinTrainingOption().click();
        } catch (error) {
            console.error('Error in clickCheckOutHere:', error);
            throw error;
        }
    }
    async chooseFile(){
        const filePath = './test/assets/textdata.csv';
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.$chooseFile().scrollIntoView();
        await this.$chooseFile().setValue(remoteFilePath);
        await browser.pause(5000);
    }

    async downloadFile(){
        const downloadDir = path.join(process.cwd(), 'testData');
        const filename = "demo.pdf";
        const filePath = path.join(downloadDir, filename);
        await browser.cdp('Page', 'setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: downloadDir
        });
 
 
        await this.$download().click();
 
        await browser.pause(3000)
 
    }
}

export default new Landing();
