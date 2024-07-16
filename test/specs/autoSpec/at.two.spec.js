import dwnld from "../../pageobjects/Automation/at-download.js"
describe("Download flow",()=>{
    it("Load url",async()=>{
        await dwnld.loadurltwo()
    })
    it("download",async()=>{
        await dwnld.download()
    })
})