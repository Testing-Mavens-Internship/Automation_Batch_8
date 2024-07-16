import downloadFile from "../pageobjects/demoAuto/downloadFile.js";

describe('Download file',()=>{
    it('Launch url',async()=>{
        await downloadFile.downloadUrl()
    })

    it('Click download',async()=>{
        await downloadFile.download();
       // expect (await downloadFile.)
    })
})