import landObj from "../../pageobjects/Akbar_Travels/landingPage.js";
import holiObj from "../../pageobjects/Akbar_Travels/holidaysPage.js";
import foodObj from "../../pageobjects/Akbar_Travels/foodPackagePage.js";
import destiObj from "../../pageobjects/Akbar_Travels/destinationPage.js";
describe('Akbar Travels Package Search and Download Flow',() => {


    it("Launch URl", async () => {
    
        await landObj.LaunchUrl();
        await landObj.$akbarTravelsHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$akbarTravelsHeader().isDisplayed())
        .withContext('The Akabar Travels Logo is displayed')
        .toBeTrue(); 
    })

    it("Click on the 'Holidays' icon in the navigation bar and verify that the page redirects to the Holidays section", async () => {
    
      
        await landObj.clickOnHolidays();
        await browser.switchWindow('https://www.akbartravels.com/holidays');
        await landObj.$holidaysPageHeader().waitForDisplayed({ timeout: 5000 });
         expect(await landObj.$holidaysPageHeader().isDisplayed())
        .withContext('The Header on the Holidays Page is displayed')
        .toBeTrue(); 
    })

    it("Click on the 'Food' icon on the Holidays Page", async () => {
    
        
        await holiObj.clickOnFood();
        await browser.switchWindow('https://www.akbartravels.com/holidays');
        await foodObj.$foodPackageHeader().waitForDisplayed({ timeout: 5000 });
         expect(await foodObj.$foodPackageHeader().isDisplayed())
        .withContext('The Header on the Holidays Page is displayed')
        .toBeTrue(); 
    })

    it("Check the recommended Checkboxes", async () => {
    
        
        await foodObj.checkRecommended();
        await browser.switchWindow('https://www.akbartravels.com/holidays');
        await foodObj.$foodPackageHeader().waitForDisplayed({ timeout: 5000 });
         expect(await foodObj.$foodPackageHeader().isDisplayed())
        .withContext('The Header on the Holidays Page is displayed')
        .toBeTrue(); 
    })


    it("Click on View Details Button", async () => {
    
       
        
        await foodObj.ClickOnViewDetailsButton();
        await browser.switchWindow('https://www.akbartravels.com/holidays');
        await destiObj.$classicVietnam().waitForDisplayed({ timeout: 10000 });
         expect(await destiObj.$classicVietnam().isDisplayed())
        .withContext('The Header on the Holidays Page is displayed')
        .toBeTrue(); 
    })

    
    it("Click on download package button", async () => {
        
        await destiObj.clickOnDownloadPackage();
        await browser.switchWindow('https://www.akbartravels.com/holidays');
        await destiObj.$classicVietnam().waitForDisplayed({ timeout: 10000 });
         expect(await destiObj.$classicVietnam().isDisplayed())
        .withContext('The Header on the Holidays Page is displayed')
        .toBeTrue(); 
    })

    it("Fill Details to download package", async () => {
        
        await destiObj.filldetails();
        await browser.switchWindow('https://www.akbartravels.com/holidays');
        await destiObj.$classicVietnam().waitForDisplayed({ timeout: 10000 });
         expect(await destiObj.$classicVietnam().isDisplayed())
        .withContext('The Header on the Holidays Page is displayed')
        .toBeTrue(); 
    })

    
})