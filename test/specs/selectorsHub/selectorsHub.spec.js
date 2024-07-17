import practicePage from "../../pageobjects/selectorsHub/sh_practicePage.js"


describe("End to end flow of SelectorsHub webApplication.",()=>{
    it("Launch the Url of the website.",async()=>{
        await practicePage.loadUrl();

    })
    it("Enter the valid credentials.",async()=>{
        await practicePage.enterDetails();
    })
    it("upload a file .",async()=>{
        await practicePage.fileUpload();
    })
    it("Download a file.",async()=>{
        await practicePage.fileDownload();
    })
   // it("switch to frames and validate.",async()=>{
    //await practicePage.switchForm();
     //expect(await this.$header().isDisplayed()).toBeTrue();
   })
   //it("clicking",async()=>{
   // await practicePage.clicking();
   // expect(await this.$header().isDisplayed()).toBeTrue();
 //})
