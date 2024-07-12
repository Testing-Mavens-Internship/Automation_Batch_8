import landObj from "../../pageobjects/Mavenkonnect/mv_LandingPage.js";
import contactObj from "../../pageobjects/Mavenkonnect/mv_ContactUsPage.js";
import checkOutObj from "../../pageobjects/Mavenkonnect/mv_CheckoutPage.js";

let fnames = ['Aiswarya','Latha','Krishnapriya'];
let lnames = ['Anilkumar','Anilkumar','PA'];
let email = ['aiswarya@gmail.com','latha@gmail.com','krishna@gmail.com'];
let contact = ['9564752123','9564753','95647']
let messsage = ['hello','world','erty']


describe('MavenKonnect End to End Flow Automation', () => {
   
    
    it('Launch URL', async () => {
     
        await landObj.LaunchUrl();
        await landObj.$mavenkonnectLogo().waitForDisplayed({ timeout: 5000 });
        expect(await  landObj.$mavenkonnectLogo().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue();
    
    })


    it('should handle multiple tabs ', async () => {
      
        for (let i = 0; i < 3; i++) {
          await landObj.clickOnContactUs();
          const handles = await browser.getWindowHandles();
          await browser.switchToWindow(handles[0]);
          //await browser.pause(2000); 
        }
        console.log(await browser.getWindowHandles())
    })

    for(let i=0; i <3; i++) {
        it(`Enter Details in the Tab ${i+1}`, async () => {
            const handles = await browser.getWindowHandles();
              await browser.switchToWindow(handles[i+1]);
              await contactObj.enterContactDetailsOne(`${fnames[i]} ${lnames[i]}`,`${email[i]}`,`${contact[i]}`,`${messsage[i]}`);
              //await browser.acceptAlert();
              await expect(browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${fnames[i]}+${lnames[i]}`);
              expect(await  contactObj.$thankYouHeader().isDisplayed())
              .withContext('Expect Thank you header to be displayed')
              .toBeTrue(); 
               //await browser.closeWindow(); 
    
        })
    }
    

    it('Switch to main tab ', async () => {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        //await landObj.clickOnUserIcon()
        //await browser.pause(2000);
        expect(await  landObj.$mavenkonnectLogo().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue();
       
    })
    
    it("Validate the yellow colors of the small circles on the homepage",async()=>{
        await landObj.clickIndicator();
        expect(await landObj.$activeIndicator().isDisplayed()).withContext("Active indicator is not displayed").toBeTrue();
      });

      it('Click on user icon ', async () => {
        await landObj.clickOnUserIcon()
        expect(await  landObj.$mavenkonnectLogo().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue();

      });

    it('Enter checkout details', async () => {
      
        await checkOutObj.enterCheckOutDetails();
       await browser.pause(5000)
       //const handles = await browser.getWindowHandles()
       await browser.switchWindow('https://demotmwebsite.github.io');
       //await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?firstname=Clinton+Madhu&email=clinton%40example.com&address=542+W.+15th+Street&city=New+York&state=NY&zip=10001&cardname=Clinton&cardnumber=1111-2222-3333-4444&expmonth=September&expyear=2022&cvv=352&sameadr=on')
       expect(await  landObj.$mavenkonnectLogo().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue(); 
    })

})
