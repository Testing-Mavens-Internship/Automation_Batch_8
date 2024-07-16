import Homepage2 from "../../pageobjects/demoAutomation/Homepage2.js";

describe('End to End flow of demo Automation site for the given flow.', () => {
    it('Navigate to url of the webpage', async () => {
        await Homepage2.loadUrlDownload();
    })

    it('Download the file.', async () => {
        await Homepage2.Download()
        
    })
})