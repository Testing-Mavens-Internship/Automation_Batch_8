import landing from "../../pageobjects/jPet/landing.js"
import registerPage from "../../pageobjects/jPet/registerPage.js";
import signIn from "../../pageobjects/jPet/signIn.js";

describe("End to end flow of JPet Store",()=>{
    it("Launch the url in the browser",async()=>{
        await landing.launchUrl();
        await landing.$header().waitForDisplayed({timeout:5000,timeoutMsg:"Header is still not displayed"});
        expect (await landing.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    });

    it("Click on the sign in link",async()=>{
        await landing.clickSignIn();
        expect (await signIn.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    });

    it("Click on the Register now link",async()=>{
        await signIn.clickRegister();
        expect (await registerPage.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    });

    it("Enter the details to register",async()=>{

    });
})