import homePage from '../pageobjects/target/homePage.js';

describe('Target end to end flow', ()=>{
    it('Should load url', async ()=>{
       await homePage.loadUrl();
       expect(await homePage.$targetLogo().isDisplayed())
         .withContext('Target home page is loaded')
         .toBeTrue();
    })

    it('Should check the prescence of Categories, Deals, New&Featured, Pickup&Delivery at the navigation bar', async ()=>{
      for(let header of homePage.iconsArray){
         expect(await homePage.$navigationIcons(header).isDisplayed())
            .withContext('Each Icon is displayed')
            .toBeTrue();
      }
    })

    it('Should click on search bar', async ()=>{
      await homePage.clicksearch();
      expect(await homePage.$submitButton().isDisplayed())
         .withContext('Search Button is present')
         .toBeTrue();
    })

    it('Shouls validate search product', async ()=>{
      await homePage.clickSubmit();
    })
   })