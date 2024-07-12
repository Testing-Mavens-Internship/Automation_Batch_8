import homepage from "../../pageobjects/MavenKonnect/homepage.js"
import contactPage from "../../pageobjects/MavenKonnect/contactPage.js"
import conformation from "../../pageobjects/MavenKonnect/conformation.js";
import userpage from "../../pageobjects/MavenKonnect/userpage.js";

let payDetails={
    "firstname":"Clinton Madhu",
    "email":"clinton@example.com",
    "nameOnCard":"Clinton",
    "address":"542 W.15th Street",
    "cardNumber":"1111-2222-3333-4444",
    "city":"New York",
    "expMonth":"September",
    "state":"NY",
    "zip":"10001",
    "expYear":"2022",
    "cvv":"352"
}
describe('End to End flow of MavenKonnect website', () => {
    it('Loading the url', async () => { 
        await homepage.loadUrl();
        await homepage.$logoHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Loading page has failed."})
        expect(await homepage.$logoHeader().isDisplayed())
    })
    it('should handle multiple tabs and enter details', async () => {
     
        for (let i = 0; i < 2; i++) {
          await homepage.clickOnContactUS();
          await contactPage.$contactHeader().waitForDisplayed({timeout:5000,timeoutMsg:"Contact us page is not displayed."})
          const handles = await browser.getWindowHandles();
          await browser.switchToWindow(handles[0]);
        }
        await homepage.clickOnContactUS();
        console.log(await browser.getWindowHandles())
    })
    for(let i=1;i<=3;i++){
        it('Entering the details on the contact page '+i, async () => {
            const handles = await browser.getWindowHandles(); 
            await browser.switchToWindow(handles[i]);
            await contactPage.enteringDetails(payDetails);
            if(await browser.isAlertOpen())await browser.acceptAlert();
            await conformation.$thankyou().waitForDisplayed({timeout:5000,timeoutMsg:"Thankyou message is displayed."});
            await expect(browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${(payDetails.firstname).replace(" ","+")}`);
            expect(await conformation.$thankyou().isDisplayed()).toBeTrue();
        })
    }
    it(`Returning back to homepage`,async()=>{
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
        await homepage.clickOnUserIcon();
        await userpage.$paymentHeader().waitForDisplayed({timeout:5000,timeoutMsg:"User page is not displayed."})
        expect(await userpage.$paymentHeader().isDisplayed()).toBeTrue();
    })
    it(`Entering the payment page values`,async()=>{
        await userpage.valuesEntering(payDetails);
        if(await browser.isAlertOpen())await browser.acceptAlert();
        await conformation.$thankyou().waitForDisplayed({timeout:5000,timeoutMsg:"Thankyou message is displayed."});
        expect(await conformation.$thankyou().isDisplayed()).toBeTrue();
        let dataset = Object.values(payDetails);
        await expect(browser).toHaveUrlContaining((payDetails.firstname.replace(" ","+")))
        await expect(browser).toHaveUrlContaining((payDetails.email.replace("@","%40")))
    })
})