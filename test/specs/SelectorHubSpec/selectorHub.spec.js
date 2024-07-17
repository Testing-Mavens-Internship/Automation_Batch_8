import landObj from "../../pageobjects/SelectorsHub/sh_LandingPage.js";


describe('Enter Details and Upload/Download Files from the selectorHub website',() => {


    it("Launch URl", async () => {
    
        await landObj.LaunchUrl();
        await landObj.$findXpathHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$findXpathHeader().isDisplayed())
        .withContext('Expect Xapth Header is displayed')
        .toBeTrue();
       
    })

   
    it("Fill Form One", async () => {
        await landObj.fillFormOne();
        await landObj.$findXpathHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$findXpathHeader().isDisplayed())
        .withContext('Expect Xapth Header is displayed')
        .toBeTrue()
       
    })


    it("Upload file into the website", async () => {
        await landObj.fileUpload();
        await landObj.$findXpathHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$findXpathHeader().isDisplayed())
        .withContext('Expect Xapth Header is displayed')
        .toBeTrue()
       
    })

    it("Upload file into the website", async () => {
        await landObj.fileUpload();
        await landObj.$findXpathHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$findXpathHeader().isDisplayed())
        .withContext('Expect Xapth Header is displayed')
        .toBeTrue()
       
    })

    it("Download the file from the website", async () => {
        await landObj.downloadFile();
        await landObj.$findXpathHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$findXpathHeader().isDisplayed())
        .withContext('Expect Xapth Header is displayed')
        .toBeTrue()
       
    })

     it("Fill form inside iframe", async () => {
     
        await landObj.iframeFormFill();
        await landObj.$iframeHeader().waitForDisplayed({ timeout: 10000 });
        expect(await landObj.$iframeHeader().isDisplayed())
        .withContext('Expect Xapth Header is displayed')
        .toBeTrue();
       
    })

    it("Switch to Parent Frame", async () => {
        await landObj.parentIframeSwitch();
        await landObj.$findXpathHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$findXpathHeader().isDisplayed())
        .withContext('Expect Xapth Header is displayed')
        .toBeTrue()
       
    })









   
})    