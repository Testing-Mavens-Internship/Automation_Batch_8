import Common from "./common.js";
import path from 'path';

class Homepage extends Common{
    constructor(){
        super();
        this.$fields=(data)=>$(`//input[@name="${data}"]`);
        this.$homepageHeader=()=>$(`//a[contains(text(),"Find out how to automate")]`);
        this.$iframe=()=>$(`//iframe[@id="coming google"]`);
        this.$submitBtn=()=>$(`//button[contains(text(),"Submit")]`);
        this.$iframeHeader=()=>$(`//div[contains(text(),"Cross Origin iframe Scenario")]`);
        this.$iframeResponceYes=()=>$(`//span[contains(text(),"Yes")]`);
        this.$scrollPoint=()=>$(`//div[contains(text(),"entries")]`);
        this.$iframeSubmitBtn=()=>$(`//span[contains(text(),"Submit")]`);
        this.$crushField=()=>$(`//input[@id="inp_val"]`);
        this.$disabledUserName=(name)=>$(`//input[@placeholder="${name}"]`);
        this.$checkoutBtn=()=>$(`//button[contains(text(),"Checkout here")]`);
        this.$valuesInCheckOut=()=>$(`//a[contains(text(),"SHub Youtube Channel")]`);
        this.$carSelection=()=>$(`//select[@id="cars"]`);
        this.$audiCarSelecting=()=>$(`//option[@value="audi"]`);
        this.$choosefile=()=>$(`//input[@id="myFile"]`);
        this.$Downloadbtn=()=>$(`//a[contains(text(),"Download PNG File")]`);
    }
/**
 * Entering the values to the fields.
 */
    async enteringFields(){
        const locator = await this.$fields("email");
        await browser.execute((element) => {
            element.removeAttribute('readonly');
        }, locator);
        await locator.setValue("Solomon");
        await this.$fields("Password").setValue("1234567890");
        await this.$fields("company").setValue("ABC");
        await this.$fields("mobile number").setValue("6282052811");
        await this.$submitBtn().click();
        await this.$submitBtn().waitForClickable();
        await this.$crushField().setValue("ABC");
    }
/**
* Entering details inside the disabled field.
*/
    async enteringDisabledFields(){
        const locator=await this.$disabledUserName("First Enter name");
        await browser.execute((element) => {
            element.removeAttribute('disabled');
        }, locator);
        await locator.setValue("Solomon");

        // const locator2= await this.$disabledUserName("Enter Last name");
        // await browser.execute((element) => {
        //     element.removeAttribute('disabled');
        // }, locator);
        // await locator2.setValue("Joseph");
    }
/**
 * Switching the windows
 */
    async switchingWindow(){
        await this.$checkoutBtn().click();
        await this.$valuesInCheckOut().click();
        const handles = await browser.getWindowHandles(); 
        await browser.switchToWindow(handles[1]);
        await browser.closeWindow()
        await browser.switchToWindow(handles[0]);
    }
/**
 * Selecting car from the dropdown
 */
    async selectingCar(){
        await this.$carSelection().click();
        await this.$audiCarSelecting().click();
    }
/**
 * Downloading file.
 */
async Download(){
    const downloadDir = path.join(process.cwd(), 'testData');   
    await browser.cdp('Page', 'setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: downloadDir
    });
    await this.$Downloadbtn().click();
}
/**
 * uploading the file.
 */
    async uploadFile(){
        await this.$Downloadbtn().scrollIntoView();
        const filePath = 'SolomonJoseph.pdf'
        const remoteFilePath = await browser.uploadFile(filePath)
    
        await this.$choosefile().setValue(remoteFilePath)
        }

/**
 * Scrolling to the iframe area.
 */
    async scroll(){
        await this.$scrollPoint().scrollIntoView();
    }
/**
 * Selecting the values in the iframe
 */
    async controlIframe(){
        await browser.switchToFrame(await this.$iframe()); 
        await this.$iframeHeader().waitForDisplayed({timeout:5000,timeoutMsg:"iframe is not loading"});
        await this.$iframeResponceYes().click();
        await this.$iframeSubmitBtn().click();
    }
}
export default new Homepage();