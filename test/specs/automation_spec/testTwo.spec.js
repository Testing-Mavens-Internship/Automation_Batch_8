import fileDownload from "../../pageobjects/AutomationTestingIN/fileDownload.js"

describe("End to end flow for file downloading",()=>{
    it("Launch URL",async()=>{
        await fileDownload.fileDownloadUrl();
        expect (await fileDownload.$header().isDisplayed()).withContext("Header is not displayed");
    });

    it("Click on 'Download' button",async()=>{
        await fileDownload.downloadFile();
    })

})