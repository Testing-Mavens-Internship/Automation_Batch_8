import commonPage from "../../pageobjects/selectorhub/commonPage.js";
import path from "path";
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
 
const downloadDir= path.join(__dirname, 'testDataTwo')
class landingPage extends commonPage {
    constructor() {
        super();
        this.$titleHeader=()=> $('//img[@class="entered lazyloaded"]');
        this.$emailHeader=()=>$('//input[@type="email"]');
        this.$password=()=>$('//input[@id="pass"]');
        this.$company=()=>$('(//input[@placeholder="Enter your company"])[1]');
        this.$mobileNumber=()=>$('(//input[@placeholder="Enter your mobile number"])[1]');
        this.$submitButton=()=>$('//button[@value="Submit"]');
        this.$iframe=()=>$('//iframe[@id="coming google"]');
        this.$checkBox=()=>$('//div[@data-value="No"]');
        this.$formSubmit=()=> $('//span/span[text()="Submit"]')
        this.$firstEnterName=()=>$('//input[@placeholder="First Enter name"]');
        this.$enterLastName=()=>$('//input[@placeholder="Enter Last name"]');
        this.$firstCrush=()=>$('//input[@placeholder="First Crush"]');
        this.$checkoutHere=()=>$('//button[@class="dropbtn"]');
        this.$chooseCar=()=>$('//select[@id="cars"]');
        this.$tickBox=()=>$('//input[@id="ohrmList_chkSelectRecord_25"]');
        this.$chooseFile=()=>$('//input[@id="myFile"]');
        this.$downloadFile=()=>$('//a[normalize-space()="Click to Download PNG File"]')
 
     }
     async fillDetails(){
        let emailInput= await this.$emailHeader()
        await browser.execute((element) => {
            element.removeAttribute('readonly');
        }, emailInput);
        await this.$emailHeader().setValue("arathy@gmail.com");
        await this.$password().setValue("Arathy@17");
        await this.$company().setValue("Testing Mavens");
        await this.$mobileNumber().setValue(1234567890);
        await this.$submitButton().click();
        await this.$firstCrush().setValue("sai")

    }
    async mouseHoverCheckout(){
        await this.$checkoutHere().moveTo();
    }
    async chooseCar(){
        await this.$chooseCar().click();
    }
    
        async usersCar(){
            await this.$tickBox().click();
        }
        async uploadFile(){
            await this.$chooseFile().scrollIntoView();
          const filePath = 'demoUpload/uploadimg.png'
          const remoteFilePath = await browser.uploadFile(filePath)
           await this.$chooseFile().setValue(remoteFilePath)
           //await browser.pause(3000);
        }
        async downloadFile() {
 
            await this.$downloadFile().scrollIntoView({ block: 'center', inline: 'center' });
                const downloadDir = path.join(process.cwd(), 'testDataTwo');
                const filename = "demo.pdf";
                const filePath = path.join(downloadDir, filename);
           
                await browser.cdp('Page', 'setDownloadBehavior', {
                    behavior: 'allow',
                    downloadPath: downloadDir
                });
     
                await this.$downloadFile().click();
       
                await browser.pause(3000)
       
             
            }
     
        }
            

        
   
    


       
        
    
    
    
   
    
// async acessIframe(){
// await this.$iframe().scrollIntoView()
// const iframe=await this.$iframe()
// await browser.switchToFrame(iframe)
// await this.$checkBox().click();
// await this.$formSubmit().click();
// }

// async backToParent(){
//     await browser.switchToParentFrame();

// }


export default new landingPage();

