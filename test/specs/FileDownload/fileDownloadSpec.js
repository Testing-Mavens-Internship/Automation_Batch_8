import downloadFile from "../../pageobjects/Demo_automationTesting/downloadFile.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url)
const __dirname=(__filename)
describe("downloading file",()=>{
    it("Launch the url",async()=>{
      await downloadFile.loadUrlForFileDownload()
    })

    it("Clicking on download button",async()=>{
        await downloadFile.ClickOndownload();

        // Specify the download directory
        const downloadPath = path.resolve(__dirname, 'test/expTest');
        console.log('Files should be downloaded to:', downloadPath);

        // Wait for the file to be downloaded
        await browser.pause(5000); // Adjust the pause duration as needed
       
       
    })
})