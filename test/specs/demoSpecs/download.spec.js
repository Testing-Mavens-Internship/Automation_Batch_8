import downloadObj from "../../pageobjects/demoAutomation/downloadPage.js";
 
 
describe('LamdaTest End-to-End Flow',() => {
 
 
    it("Launch URl", async () => {
   
        await downloadObj.fileUrl();
        // await landObj.$lamdatestHeader().waitForDisplayed({ timeout: 5000 });
         // expect(await landObj.$AutomationSiteHeader().isDisplayed())
        // .withContext('Automation Header is Displayed')
        // .toBeTrue();
    })
 
it('file download',async()=>{
    await downloadObj.downloadFile();
    await browser.pause(5000);
 
    })
 
 
 
 
})
 