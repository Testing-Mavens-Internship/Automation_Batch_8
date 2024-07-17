import landObj from "../../pageobjects/selectorhub/landingPage.js";
describe("selectorhub",()=>{
    it("should load url",async() => {
        await landObj.loadUrl();
        await landObj.$titleHeader().waitForDisplayed({timeout:1000,timeoutMsg:"waiting for header to be displayed"})
      expect(await landObj.$titleHeader().isDisplayed())
        .withContext("Expected header 'selectorhub' is displayed")
        .toBeTrue();
    });

    
    it("Enter the details",async()=> {
        await landObj.fillDetails();
        await landObj.$titleHeader().waitForDisplayed({timeout:1000,timeoutMsg:"waiting for header to be displayed"})
        expect(await landObj.$titleHeader()
        .isDisplayed()).withContext("expect header to be displayed")
        .toBeTrue();
    })
    
    it(" Hover mouse over checkOutHere ",async()=>{
        await landObj.mouseHoverCheckout();
        (await landObj.$titleHeader()).waitForDisplayed({timeout:1000,timeoutMsg:"waiting for header to be displayed"})
        expect(await landObj.$titleHeader()
        .isDisplayed()).withContext("expect header to be displayed")
        .toBeTrue();
    })
    it("choose a car",async()=>{
        await landObj.chooseCar();
        (await landObj.$chooseCar()).waitForDisplayed({timeout:1000,timeoutMsg:"waiting for header to be displayed"})
        expect(await landObj.$chooseCar()
        .isDisplayed()).withContext("expect header to be displayed")
        .toBeTrue();

    })
    it("choose one from users table", async()=>{
        await landObj.usersCar();
        (await landObj.$tickBox()).waitForDisplayed({timeout:1000,timeoutMsg:"waiting for header to be displayed"})
        expect(await landObj.$tickBox()
        .isDisplayed()).withContext("expect header to be displayed")
        .toBeTrue();

    })
    it("upload file", async()=>{
        await landObj.uploadFile();
        
    })
    it("download file",async()=>{
        await landObj.downloadFile();
    })

        

    
//    it("switch to window",async()=> {
//        await landObj.acessIframe();
       
//        await landObj.$iframe().waitForDisplayed({reverse: true,timeout:5000,timeoutMsg:"expected Cross Origin iframe Scenario should be displayed"})
//        expect(await landObj.$iframe().isDisplayed())
//        .withContext("expected header to be displayed")
//        .toBeFalse();
//    })

//     it("switch back to parent",async ()=> {
//         await landObj.backToParent();
//         await landObj.$iframe().waitForDisplayed({timeout:5000,timeoutMsg:"selectorhub header should be displayed"})
//        expect(await landObj.$iframe().isDisplayed())
//        .withContext("expected header to be displayed")
//        .toBeTrue();
//     } )   



})

