import landing from '../pageobjects/practisePage/landing.js';

describe('Load url of practise page', ()=>{
    it('Should load url and load landing page', async ()=>{
        await landing.loadUrl();
            expect(await landing.$productHeader().isDisplayed())
                .withContext('Header should be displayed')
                .toBeTrue();

    })
    
    it('Should enter details', async ()=>{
        await landing.enterDetails();
        // const handles = await browser.getWindowHandles();
        // await browser.switchToWindow(handles[1]);
        // await browser.closeWindow();  

    })

    it('Should upload a file', async ()=>{
        await landing.fileUpload();
    })

    it('Should download a file', async ()=>{
       
        await landing.downloadFile();
    })

    it('should interact with Google Form iframe', async () => {
        await landing.googleForm();
        await landing.$yesButton().waitForDisplayed({timeout: 5000});
            expect(await landing.$yesButton().isDisplayed())
                .withContext('Yes button is displayed')
                .toBeTrue();
    });
    

    it('Should click on Yes Button', async () => {
        await landing.clickYesButton();
    });

    it('Switching to parent frame', async () => {
        await landing.switchingToParentFrame();
    });
})