import landObj from "../../pageobjects/mavensKonnect/mkLanding.js"
import contactObj from "../../pageobjects/mavensKonnect/mkContact.js";
import checkOutObj from "../../pageobjects/mavensKonnect/mkCheckout.js";
 
let fname=["Nikhil","Aleena","Mithun"]
let lname=["Kzkd","Idk","Pta"]
let mail=["nikhil123@gmail.com","aleena321@gmail.com","mithun555@gmail.com"]
let ph=["8876390855","9878900437","8848033898"]
let msg=["Hai","Hello","Welcome"]

let paymentDetails={
  "firstname":"Clinton Madhu",
  "email":"clinton@example.com",
  "nameOnCard":"Clinton",
  "address":"542 W. 15th Street",
  "cardNumber":"1111-2222-3333-4444",
  "city":"New York",
  "expMonth":"September",
  "state":"NY",
  "zip":"10001",
  "expYear":"2022",
  "cvv":"352",
}
describe('MavenKonnect End to End Flow Automation', () => {
   
   
    it('Launch URL', async () => {
     
        await landObj.loadurl();
        expect(await  landObj.$landheader().isDisplayed())
        .withContext('Expect Logo to be displayed')
        .toBeTrue();

   
    })
 
    it('Click on contact us and repeat same', async () => {
     
        for (let i = 0; i <3; i++) {
          await landObj.clickoncontact();
          const handles = await browser.getWindowHandles();
          await browser.switchToWindow(handles[0]);
          await browser.pause(2000);
        }

        // console.log(await browser.getWindowHandles())
    })

      for(let i=0;i<3;i++)
      {
      it('Enter Details in the Tab ${i+1}', async () => {
      const handles=await browser.getWindowHandles();
      await browser.switchToWindow(handles[i+1])
      await contactObj.enterdetails(`${fname[i]} ${lname[i]}`, mail[i],ph[i],msg[i])
      await expect(await browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${fname[i]}+${lname[i]}`)
      expect (await contactObj.$thankYouHeader().isDisplayed()).toBeTrue();
    })
      }
      it("Go back to first page and click on carousal buttons",async()=>{
        let handles=await browser.getWindowHandles()
        await browser.switchToWindow(handles[0]);
        await landObj.dotclk()
        expect(await landObj.$activedot().isDisplayed()).toBeTrue()


      })
      it("Click on user icon and navigate to checkout",async()=>{
        await landObj.chkout();
        expect(await landObj.$chktxt().isDisplayed()).toBeTrue()
      })
      it("Enter Details ",async()=>{
        await checkOutObj.enterdetails(
          paymentDetails.firstname,
          paymentDetails.email,
          paymentDetails.address,
          paymentDetails.city,
          paymentDetails.state,
          paymentDetails.zip,
          paymentDetails.nameOnCard,
          paymentDetails.cardNumber,
          paymentDetails.expMonth,
          paymentDetails.expYear,
          paymentDetails.cvv
        );

      })
    
    })
 
    // it('Enter checkout details', async () => {
       
    //    const handles = await browser.getWindowHandles();
       
    //    await browser.switchToWindow(handles[0]);
    //    await landObj.clickOnUserIcon();
    //    await checkOutObj.enterCheckOutDetails();
    //    browser.pause(2000);
    //    //await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?firstname=Clinton+Madhu&email=clinton%40example.com&address=542+W.+15th+Street&city=New+York&state=NY&zip=10001&cardname=Clinton&cardnumber=1111-2222-3333-4444&expmonth=September&expyear=2022&cvv=352&sameadr=on')
    //    expect(await  landObj.$mavenkonnectLogo().isDisplayed())
    //     .withContext('Expect Logo to be displayed')
    //     .toBeTrue();
    // })
// })