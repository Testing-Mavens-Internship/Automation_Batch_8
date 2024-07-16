import landingPage from "../pageobjects/AutomationDemo/landingPage.js";
import registerPage from "../pageobjects/AutomationDemo/registerPage.js";

let email= await landingPage.randomEmail();

describe('End to end flow of Automation Demo Site',()=>{
    it('Launch url',async()=>{
        await landingPage.loadUrl()
        //await landingPage.$logo().waitForDisplayed({ timeout: 5000 })
        // expect(await landingPage.$logo().isDisplayed())
        // .withContext('Expect logo to be displayed')
        // .toBeTrue()
    })

    it('Enter email',async()=>{
        await landingPage.enterEmail(email)
        //await register.$header().waitForDisplayed({ timeout: 5000 })
        // expect(await register.$header().isDisplayed())
        // .withContext('Expect header to be displayed')
        // .toBeTrue()
    })

    it('Enter the details in Register page',async()=>{
         await registerPage.enterDetails('Athira','Soman','Carnival Kochi', `${email}`, 9876543210, 'Athira@123','Athira@123')
    })

    it('File upload',async()=>{
        await registerPage.uploadFile()
   })
})
