import landing from "../pageobjects/selectorshub/sh_Landingpage.js"
import iFrame from "../pageobjects/selectorshub/sh_iFrame.js";
describe('data entering in selectors hub website => ', ()=>{

    it('launch selectors hub website', async()=>{
        await landing.loadUrl();
        expect(await landing.$emaillabel().waitForDisplayed());
    })
    it('Enter Personal Details', async()=>{
        await landing.enterUserDetails();
        expect(await landing.$emaillabel().waitForDisplayed());
    })
    // it('Hover on Checkouthere and select an option', async()=>{
    //     await landing.clickCheckOutHere();
       
    // })
    // it('Access Iframe and click yes', async()=>{
    //     await iFrame.accessIframe();
       
    // })
    // it('Entering the first name in the disabled first name field', async()=>{
    //     await landing.enterDetailsInDisabledFields();
    // })
    it('Choose a file to upload.', async()=>{
        await landing.chooseFile();
    })
    it('download the file.', async()=>{
        await landing.downloadFile();
        expect(await landing.$download().waitForClickable())
    })

    
})