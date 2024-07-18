import download from "../pageobjects/demo_automation/download.js"

describe('Download functionality',()=>{
    it('Launch URL',async()=>{
        await download.newURL()
    })
    it('Click download button',async()=>{
        await download.selectDownload()
    })
    // it('Generate text',async()=>{
    //     await download.generateText()
    //     await browser.pause(5000)
    // })
})