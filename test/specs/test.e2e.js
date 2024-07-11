
import loginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('Launch url', async () => {
await loginPage.loadUrl();
    await loginPage.$header().waitForDisplayed();
    expect(await loginPage.$header().isDisplayed()).withContext('Expect header to be displayed').toBeTrue();
        
    })

   it('entering credentials',async () =>{
    await loginPage.login();
await loginPage.$header().waitForDisplayed();
    expect((await loginPage.$header()).isDisplayed()).withContext('Expect header to be displayed').toBeTrue();

    
   })
})

