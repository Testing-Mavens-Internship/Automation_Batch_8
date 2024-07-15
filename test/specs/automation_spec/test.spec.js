import landingPage from "../../pageobjects/AutomationTestingIN/landingPage.js"
import registerPage from "../../pageobjects/AutomationTestingIN/registerPage.js";

let email= await landingPage.generateRandomEmail();

describe("Automation testing",()=>{
    it("Launch the URL in the browser",async()=>{
        await landingPage.launchUrl();
        expect(await landingPage.$emailInput().isDisplayed()).withContext("Input field for entering email is still not displayed").toBeTrue();
    });

    it("Enter the email for sign up",async()=>{
        await landingPage.signUp(email);
        await registerPage.$header().waitForDisplayed({timeout:10000})
        expect (await registerPage.$header().isDisplayed()).withContext("Header is not displayed");
    });

    it("Enter details in the register form",async()=>{
        await registerPage.fillRegisterDetails("Honey","Sebastian","higffh",`${email}`,"6746","fgfsgfsdfg","fgfsgfsdfg");
        await registerPage.uploadFile();
    })
})