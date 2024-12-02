import loginPage from "../pageobjects/demoAutomation/loginPage.js";
import landingPage from "../pageobjects/demoAutomation/landingPage.js";





function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }






describe('My Login application', () => {
    it("Lad the page successfully", async () => {
        await loginPage.loadUrl()
    })
        
        // await loginPage
        // .$email()
        // .waitForDisplayed({
        //     timeout: 10000,
        //     timeoutMsg: "Header is not visible",
        // });
        // expect(await loginPage.$email().isDisplayed())
        // .withContext("header should be visible")
        // .toBeTrue();
   

    it("Enter random email", async () => {
        const randomEmail = makeid(10) + '@email.com';
        await loginPage.login(randomEmail);
        console.log(randomEmail);
    })
    
    it("Click on login button", async () => {
        await loginPage.$button().click();
    })  
    it("enter details", async () => {
        await landingPage.login();
    })
    it("upload file", async () => {
        await landingPage.uploadFile();
    })


})