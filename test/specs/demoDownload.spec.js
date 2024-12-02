import downloadPage from "../pageobjects/demoAutomation/downloadPage.js";

describe('Download application', () => {
    it("Load the page successfully", async () => {
        await downloadPage.loadUrl()
    })

    it("Click on download button", async () => {
        await downloadPage.download()
    })
})
