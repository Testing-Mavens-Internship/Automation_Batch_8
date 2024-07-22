import progressBar from "../pageobjects/progressBar/progressBar.js";

describe("Stoping the progress bar when it reaches 75%", () => {
    it("Load Url", async () => {
        await progressBar.loadUrl();
        expect(await progressBar.$landingPageHeader().isDisplayed())
    })
    it('Start and stop the progress bar', async () => {
        await progressBar.StartAndStop();
    })
})