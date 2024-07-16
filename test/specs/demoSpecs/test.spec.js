import landObj from "../../pageobjects/demoAutomation/landingPage.js";
import regObj from "../../pageobjects/demoAutomation/registerPage.js";
let email = await landObj.randomEmail();
describe('demoTest End-to-End Flow',() => {
 
 
    it("Launch URl", async () => {
   
        await landObj.LaunchUrl();
        // await landObj.$lamdatestHeader().waitForDisplayed({ timeout: 5000 });
         // expect(await landObj.$AutomationSiteHeader().isDisplayed())
        // .withContext('Automation Header is Displayed')
        // .toBeTrue();
    })
 
    it('enter email',async()=>{
        await landObj.firstEmail(email);
    })
    it('enter the details',async()=>{
        await regObj.register('Riya','Rohan','123 A HillWalley',email,8956471235,'demoauto@123','demoauto@123');
    })
 
    it('file upload',async()=>{
        await regObj.fileUpload();
    })
 
   
 
 
})


