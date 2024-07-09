import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.loadURL()
        expect(await LoginPage.$header().isDisplayed())
                   .withContext('Expect header to be displayed')
                   .toBeTrue()  
    })
    it('should login with valid credentials', async () => {
        await LoginPage.login()
        expect(await LoginPage.$pdtheader().isDisplayed())
                   .withContext('Expect header to be displayed')
                   .toBeTrue()  
    })
})

