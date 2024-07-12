import landingPage from "../pageobjects/mavenKonnect/landing.js";
import contactUs from "../pageobjects/mavenKonnect/contactUs.js";
import thankYou from "../pageobjects/mavenKonnect/thankyou.js";
import checkoutDetails from "../pageobjects/mavenKonnect/checkOut.js";

let fname =['Aleena', 'Honey', 'Krish'];
let lname =['Shaji', 'Bee', 'k'];
let email =['aleena@gmail.com', 'Honey@gmail.com', 'Krish@gmail.com'];
let number =['7510817131', '6543789210', '8734298019'];
let message =['Hello', 'Hi', 'How are you'];

let paymentDetails={
    "fullName":"Clinton Madhu",
    "email":"clinton@example.com",
    "address":"542 W. 15th Street",
    "city":"New York",
    "state":"NY",
    "zipCode":"10001",
    "nameOnCard":"Clinton",
    "creditCardNumber":"1111-2222-3333-4444",
    "expiryMonth":"September",
    "expiryYear":"2022",
    "cvv":"352",
}


describe('mavenKonnect', () => {
    it('Should load URL', async ()=> {
        await landingPage.loadUrl();
        expect(await landingPage.$contactUsHeader().isDisplayed())
                .withContext('landing page should be loaded')
                .toBeTrue();
    })

    it('Click on contactUs option for 3 times', async ()=> {
        for (let i = 0; i < 3; i++) {
            await landingPage.clickHeader();
            const handles = await browser.getWindowHandles();
            await browser.switchToWindow(handles[0]);
            await browser.pause(2000);
          }
          console.log(await browser.getWindowHandles())
                  
    })
     
    for(let i=0; i < 3; i++){
    it(`Should enter valid details in the ContactUs page ${i+1}`, async ()=> {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[i+1]);
        await contactUs.enterDetails(`${fname[i]} ${lname[i]}`, email[i], number[i], message[i])
        await expect(browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${fname[i]}+${lname[i]}`);
        expect(await thankYou.$thankYouHeader().isDisplayed())
                .withContext('Expect Thank you header to be displayed')
                .toBeTrue();  
    })
    }

    it(`should navigate to home page and click on carousel dots`, async ()=>{
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        await landingPage.carouselDots();
        expect(await landingPage.$activeCarouselDot().isDisplayed())
                .withContext('Expected header is displayed')
                .toBeTrue(); 


    })

    it(`Click on user icon`, async ()=> {
        await landingPage.userIcon();
        expect(await landingPage.$checkOutHeader().isDisplayed())
                .withContext('Expected header is displayed')
                .toBeTrue(); 
    })

    it('Enter checkOutDetails in the user tab', async () => {
        await checkoutDetails.addDetails(
          paymentDetails.fullName,
          paymentDetails.email,
          paymentDetails.address,
          paymentDetails.city,
          paymentDetails.state,
          paymentDetails.zipCode,
          paymentDetails.nameOnCard,
          paymentDetails.creditCardNumber,
          paymentDetails.expiryMonth,
          paymentDetails.expiryYear,
          paymentDetails.cvv
        );

})




})