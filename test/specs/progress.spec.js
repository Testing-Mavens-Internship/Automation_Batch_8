import progressbar from "../pageobjects/progressbar.js";

describe('Drag progress bar to 75 and validate result displayed is 0',()=>{
    it('Launch URL',async()=>{
        await progressbar.launchURL()
        expect(await progressbar.$header().isDisplayed()).withContext('Paage header not displayed').toBeTrue()
    })
    it('Progress bar functionality',async()=>{
        await progressbar.progressFunction()
        await browser.pause(8000)
    })
})