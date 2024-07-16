import download from ".././pageobjects/download/fileDownload.js";

describe("Download.",()=>{
    it("Launch the url.",async()=>{
        // await download.loadUrlDownload()
        // await browser.pause(5000);
        // expect(await download.$header().isDisplayed()).toBeTrue();
        await browser.url('https://demo.automationtesting.in/FileDownload.html');
    })
    it("download the file.",async()=>{
        const downloadDir = path.resolve(__dirname, 'downloads');

        
        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir);
        }
        fs.readdirSync(downloadDir).forEach((file) => {
            fs.unlinkSync(path.join(downloadDir, file));
        });
         await download.downloadFile();
        // await browser.pause(5000);
        //await $(`//a[@href="/Content/Download.zip"]`).click();
        await browser.pause(25000);
    })
})