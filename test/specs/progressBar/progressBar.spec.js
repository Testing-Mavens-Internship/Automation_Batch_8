import progress from "../../pageobjects/progressBar/progressBarPage.js";

describe("To stop the progressbar when it reaches 75%.",()=>{
    it("launch the url.",async()=>{
        await progress.loadUrl();
    })
    it("Stop the progress bar.",async()=>{
        await progress.loadProgressBar();
    })
})