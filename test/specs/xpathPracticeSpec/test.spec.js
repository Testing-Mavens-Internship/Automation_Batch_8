import mainPage from "../../pageobjects/xpathPractice/mainPage.js"

describe("Xpath practice",()=>{
    it("Launch URL in the browser",async()=>{
        await mainPage.launchUrl();
        await mainPage.$header().waitForDisplayed({timeout:5000})
        expect (await mainPage.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    });

    it("Locate google form",async()=>{
        await mainPage.switchToGoogleForm();
        await mainPage.$formHeader().waitForDisplayed({timeout:5000});
        expect (await mainPage.$formHeader().isDisplayed()).withContext("form header is still not displayed").toBeTrue();
    });

    it("Switch back to main page",async()=>{
        await mainPage.switchBackToMainPage();
        expect (await mainPage.$logoHeader().isDisplayed()).withContext("Parent header is not displayed").toBeTrue();
    });

    it("Enter the details in the userform",async()=>{
        await mainPage.userFormDetails("Honey Sebastian",12345,"testing mavens",11111111111);
    })
})