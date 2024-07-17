import landingPage from "../pageobjects/Demoautomate/landingPage.js"
import registerPage from "../pageobjects/Demoautomate/registerPage.js";
describe('e2e flow of demo Automation ',()=>{
    it('Launch url', async()=>{
        await landingPage.launchUrl();
    })
    it('enter random email', async()=>{
        await landingPage.enteremail();
        await browser.pause(5000);
    })
    it('fill details', async()=>{
        await registerPage.enterdetails();
        await browser.pause(5000);
    })
})