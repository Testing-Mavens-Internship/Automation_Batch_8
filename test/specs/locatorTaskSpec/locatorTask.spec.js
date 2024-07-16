import landobj from "../../pageobjects/locatorTask/loc-Landing.js"
describe("Locator finding and automate task",()=>{
    it("Launch URL",async()=>{
        await landobj.loadurl();
        expect(await landobj.$hdr().isDisplayed()).toBeTrue()
    })

    // it("Access Iframe",async()=>{
    //     await landobj.acessiframe();
    //     expect(await landobj.$ifrvalidate().isDisplayed()).toBeTrue()
    // })
    // it("Comeback to parent",async()=>{
    //  await landobj.movetoparent()
    //  expect(await landobj.$parentvalidate().isDisplayed()).toBeTrue()   
    // })
    it("Enter Details",async()=>{
       await landobj.details()
       expect(await landobj.$label().isDisplayed()).toBeTrue()
    })
    // it("Enter next details",async()=>{
    //     await landobj.nextdetails()
    // })
    it("Enter details for useful links for learning",async()=>{
        await landobj.usefuldetails()
        expect(await landobj.$label().isDisplayed()).toBeTrue()
    })
    it("upload functionality",async()=>{
      await landobj.uploads()  
      
    })
    it("Download functionality",async()=>{
        await landobj.download()
        
    })
})