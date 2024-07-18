import main from "../pageobjects/selectorshub/main.js";

describe('End to end flow for Selectors hub website',()=>{
    it('Launch URL',async()=>{
        await main.launchURL()
        await browser.pause(5000)
        expect(await main.$mainheading().isDisplayed()).toBeTrue()
    })
    it('Enter details in form',async()=>{
        await main.enterDetails()
        expect(await main.$mainheading().isDisplayed()).toBeTrue()
    })
    it('Enter name in disabled textfield',async()=>{
        await main.enterName()
    })
    it('Hover checkout here button and select an option',async()=>{
        await main.dropdownfn()
        await browser.pause(5000)
        const handles= await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
        await browser.pause(5000)
    })
    it('Users table',async()=>{
        await main.selectUsersTable()
    })
    it('Upload a file',async()=>{
        await main.uploadFile()
        expect(await main.$mainheading().isDisplayed()).toBeTrue()
        await browser.pause(5000)
    })
    it('Download a file',async()=>{
        await main.downloadFile()
        expect(await main.$mainheading().isDisplayed()).toBeTrue()
        await browser.pause(5000)
    })
    it('Switch to iframe',async()=>{
        await main.validateframe()
        expect(await main.$iframeheading().waitForDisplayed({timeout:5000})).toBeTrue()
    })
    it('Back to parent',async()=>{
        await main.backtoparent()
        expect(await main.$mainheading().waitForDisplayed({timeout:5000})).toBeTrue()
    })

})