import homePage from "../pageobjects/demoAuto/homePage.js";
import landingPage from "../pageobjects/demoAuto/landingPage.js";
let email= await homePage.randomEmail();
describe('end to end flow',()=>{
    it('launch url',async()=>{
        await landingPage.loadUrl()
    })
    it('enter email',async()=>{
        await landingPage.enterEmail(email);
    })
    it('enter the details',async()=>{
        await homePage.enterDetails('tom','teena','hasbnkjueywgbj',email,6777888899,'hindi','India','yewhbxn','yewhbxn');
    })
    it('upload file',async()=>{
    await homePage.uploadFile();
    await browser.pause(3000);
    })
})