import landingPage from "../pageobjects/Demoautomate/landingPage.js"
import downloadPage from "../pageobjects/Demoautomate/downloadPage.js";
describe('download a file',()=>{
    it('launch url',async()=>{
        landingPage.launchdownloadUrl();
        await browser.pause(5000);
    })
    it('click download button',async()=>{
        await downloadPage.download();
        
    })

})