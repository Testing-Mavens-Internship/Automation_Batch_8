import landingPage from "../../pageobjects/target/landingPage.js";


describe("End to end flow of the website 'Target'.",()=>{
    it("Launch the Url of the website.",async()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$targetLogo().isDisplayed()).withContext("Logo is not displayed.").toBeTrue();

    })
  //  it("Validate all the icons present in the navigation Bar.",async()=>{
        //let navBarArray=await landingPage.validateIcons();
       // expect(navBarArray).toEqual(arr);
   // })

    
})