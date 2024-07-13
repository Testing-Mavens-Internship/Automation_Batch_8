import landingPage from "../pageobjects/mavenKonnect/landingPage.js";
import contactPage from "../pageobjects/mavenKonnect/contactPage.js";
import thankYouPage from "../pageobjects/mavenKonnect/thankyouPage.js";
import checkoutPage from "../pageobjects/mavenKonnect/checkoutPage.js";

let fullname=['Dinu','Dia','Sia'];
let email=['dinu@gmail.com','dia23@gmail.com','sia1234@gmail.com'];
let phone=['8768908634','6789765467','8798654678'];
let message=['Hello','Welcome','Hi'];

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


describe('End to end flow of mavenKonnect', () => {
    it('Launch URL', async ()=> {
        await landingPage.loadUrl();
        expect(await landingPage.$contactUs().isDisplayed())
        .withContext('landing page should be loaded')
        .toBeTrue();
    })

    it('Click three times on ContactUs option', async ()=> {
        for (let i = 0; i < 3; i++) {
            await landingPage.clickHeader();
            const handles = await browser.getWindowHandles();
            await browser.switchToWindow(handles[0]);
            await browser.pause(2000);
          }
          console.log(await browser.getWindowHandles())
                  
    })
     
    for(let i=0; i < 3; i++){
    it(`Enter valid details in the ContactUs page ${i+1}`, async ()=> {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[i+1]);
        await contactPage.enterDetails(fullname[i], email[i], phone[i], message[i])
        await expect(browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${fullname[i]}`);
        expect(await thankYouPage.$thankYouHeader().isDisplayed())
        .withContext('Expect Thank you header to be displayed')
        .toBeTrue();  
    })
    }

    it('Click on carousel dots in the homepage', async ()=>{
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        await landingPage.clickCarouselDots();
        expect(await landingPage.$activeCarouselDot().isDisplayed())
        .withContext('Expected header is displayed')
        .toBeTrue(); 


    })

    it(`Click on user icon`, async ()=> {
        await landingPage.clickUserIcon();
        expect(await landingPage.$checkOutHeader().isDisplayed())
        .withContext('Expected header is displayed')
        .toBeTrue(); 
    })

    it('Enter payment details', async () => {
        await checkoutPage.addDetails(
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
