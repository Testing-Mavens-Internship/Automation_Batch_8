import landing from "../../pageobjects/jPet/landing.js"
import registerPage from "../../pageobjects/jPet/registerPage.js";
import signIn from "../../pageobjects/jPet/signIn.js";
import data from "../../../testData/JPetData.json" assert{type:"json"}
import homePage from "../../pageobjects/lambda/homePage.js";

let id=data.userId;
let newPassword=data.newPassword;
let repeatedPassword=data.repeatPassword;
let fname=data.fName
let lname=data.lName
let phone=data.phone
let address1=data.address1
let address2=data.address2
let city=data.city
let state=data.state
let zip=data.zip
let country=data.country

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
        let email= await registerPage.generateRandomEmail();
        await registerPage.enterDetails(id,newPassword,repeatedPassword,fname,lname,email,phone,address1,address2,city,state,zip,country);
        expect (await registerPage.$saveAccountInformation().isDisplayed()).withContext("Save account information button is not displayed");
    });

    it("Click the save account information button",async()=>{
        await registerPage.clickSaveAccountInformationButton();
        expect (await registerPage.$header().isDisplayed()).withContext("Header is not displayed");
    });

    it("Click on the sign in button",async()=>{
        await landing.clickSignIn();
        expect (await signIn.$signInHeader().isDisplayed()).withContext("'Please enter your username and password' header is not displayed");
    });

    it("Login using valid username and password",async()=>{
        await signIn.Login();
        expect(await ho)

    });

    it("")
})