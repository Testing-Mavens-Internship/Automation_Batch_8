import landingPage from "../pageobjects/selectorsHub/landingPage.js";


let formValues={
    email :"adkasn@example.com",
    password :"12345",
    company :"company",
    mobile :"1234567890",
    crush :"1234567890"
}
let restValue={
    firstName :"tom",
    lastName :"john"
}


describe("Selectors Hub", () => {
    it("should open landing page", async () => {
      await landingPage.loadUrl();
      await landingPage.$email().waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Email not visible",
      })
      expect(await landingPage.$email().isDisplayed())
        .withContext("Email should be visible")
        .toBeTrue();
    });

    it( "switch to G Form",async()=>{
        await landingPage.switchTogForm()
        await landingPage.$checkBox().waitForDisplayed({
            timeout: 10000,
            timeoutMsg: "Header not visible",
          })
        expect(await landingPage.$checkBox().isDisplayed())
            .withContext("Header should be visible")
            .toBeTrue();
            
        })

       
    

    it ("fill G Form",async()=>{
        await landingPage.fillgForm()
        await landingPage.$header().waitForDisplayed({
            timeout: 10000,
            timeoutMsg: "Header not visible",
          })
        expect(await landingPage.$header().isDisplayed())
            .withContext("Header should be visible")
            .toBeTrue();
    })

    it ("fill form in landing Page",async()=>{
        await landingPage.fillForm(formValues.email, formValues.password, formValues.company, formValues.mobile, formValues.crush);
        await landingPage.$downloadFile().waitForDisplayed({
            timeout: 10000,
            timeoutMsg: "Header not visible",
          })
        expect(await landingPage.$downloadFile().isDisplayed())
            .withContext("Header should be visible")
            .toBeTrue();
    })

    it("fill restricted form",async()=>{
        await landingPage.fillRestForm(restValue.firstName,restValue.lastName)
        await landingPage.$header().waitForDisplayed({
            timeout: 10000,
            timeoutMsg: "Header not visible",
          })
        expect(await landingPage.$header().isDisplayed())
            .withContext("Header should be visible")
            .toBeTrue();
    })

    it("upload file",async()=>{
        await landingPage.uploadFile()
        await landingPage.$header().waitForDisplayed({
            timeout: 10000,
            timeoutMsg: "Header not visible",
          })
        expect(await landingPage.$header().isDisplayed())
            .withContext("Header should be visible")
            .toBeTrue();
    })

    it("download file",async()=>{
        await landingPage.downloadFile()
        await landingPage.$header().waitForDisplayed({
            timeout: 10000,
            timeoutMsg: "Header not visible",
          })
        expect(await landingPage.$header().isDisplayed())
            .withContext("Header should be visible")
            .toBeTrue();
    })
})
