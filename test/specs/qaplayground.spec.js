import sortedlist from "../pageobjects/qaPlayground/sortedlist.js";
describe('QA Playground website',()=>{
    it('Launch URL',async()=>{
        await sortedlist.launchURL()
        expect(await sortedlist.$header().isDisplayed()).withContext('Header not displayed').toBeTrue()
        await browser.pause(5000)
    })
    it('Sorted list',async()=>{
        await sortedlist.dragandDrop()
        await browser.pause(5000)
    })
})