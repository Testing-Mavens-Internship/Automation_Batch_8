import registerPageDemo from "../../pageobjects/Demo_automationTesting/registerPageDemo.js";
import signUpPageDemo from "../../pageobjects/Demo_automationTesting/signUpPageDemo.js"
describe("verifying the functionality of webpage",()=>{
    it("Launch the url",async()=>{
        await signUpPageDemo.Loadurl();
    })

    it("Entering email address",async()=>{
        await signUpPageDemo.enteringEmail();
        await browser.pause(5000)
    })
    it("registering",async()=>{
        await registerPageDemo.enteringDetails();
        await registerPageDemo.$registerhead().waitForDisplayed(({ timeout:5000,timeoutMsg:"header not found" }))
    })

})