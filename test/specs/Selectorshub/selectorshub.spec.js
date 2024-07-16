import landingPageHub from "../../pageobjects/Selectorshub/landingPageHub.js";
describe("Validating the functionality of selectorhub webpage ",()=>{
    it("launching the url",async()=>{
        await landingPageHub.Loadurl();
        expect(await landingPageHub.$pageheader().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    })

    it("Entering details to register",async()=>{
        await landingPageHub.enteringDetails();
        expect(await landingPageHub.$pageheader().waitForDisplayed(({timeout:5000,timeoutMsg:"Header not found"})))
    })
    
    it("Uplodaing file to the page",async()=>{
        await landingPageHub.fileUpload();
        expect(await landingPageHub.$pageheader().waitForDisplayed(({timeout:5000,timeoutMsg:"header not found"})))
    })

    it("dowmloading file form selectorhub webpage",async()=>{
        await landingPageHub.downloadFile();
        expect(await landingPageHub.$download().waitForDisplayed(({timeout:5000,timeoutMsg:"header not found"})))
        
    })
    
    it("Switch to iframe",async()=>{
        await landingPageHub.iframe();
        await landingPageHub.$iframeHeader().isDisplayed();
       
    })

    it("Back to Parent window",async()=>{
        await landingPageHub.backtoParent();
    })

})







    // it("Clicking on Useful links",async()=>{
    //     const handles=await browser.getWindowHandles();
    //     await browser.switchToWindow(handles[1]);
    //     await landingPageHub.UsefullLinks();
    //     await browser.pause(5000)
    //     await browser.closeWindow();
    // })



    // it("Entering firstname and lastname",async()=>{
    //     await landingPageHub.enteringNames();
    // })




