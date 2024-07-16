import landingPage from '../pageobjects/index/landing.js';
import registerPage from '../pageobjects/index/register.js';

describe('Index Demo website', ()=> {
    it('Should load the website url', async ()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$signUp().isDisplayed())
                .withContext('Landing page should be loaded')
                .toBeTrue();
    })

    it('Should enter random email', async ()=>{
        await landingPage.generateEmail();
        expect(await registerPage.$registerHeader().isDisplayed())
                .withContext('Register page is loaded')
                .toBeTrue();
    })

    it('Shopuld enter details', async ()=>{
        await registerPage.enterDetails();
        
    })

    it('Should upload a file',async ()=>{
        await registerPage.uploadFile();
    })
})