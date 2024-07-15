import { expect } from '@wdio/globals'
import landingPage from '../pageobjects/MavenKonnect/landingPage.js'
import contactUsPage from '../pageobjects/MavenKonnect/contactUsPage.js'
import thankYouPage from '../pageobjects/MavenKonnect/thankYouPage.js'
import checkOutPage from '../pageobjects/MavenKonnect/checkOutPage.js'

describe('To verify workflow of MavenKonnect website', () => {
it('Launch URL in browser', async () => {
    await landingPage.loadUrl()
    await landingPage.$header().waitForDisplayed({ timeout: 5000 })
    expect(await  landingPage.$header().isDisplayed())
    .withContext('Expect MavenKonnect to be displayed')
    .toBeTrue()
})

it('Click Contact Us button and switch to multiple tabs', async () => {
    for (let i = 0; i < 3; i++) {
        await landingPage.clickContactUs()
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0])
        expect(await contactUsPage.$contactPageHeader().isDisplayed())
        .withContext('Expect Contact Us header to be displayed')
      }
      console.log(await browser.getWindowHandles())
})

let fname=['Athira', 'Honey', 'Krishna']
let lname=['Soman', 'Sebastian', 'K']
let mail=['athira01081998@gmail.com', 'honey0122@gmail.com', 'krishna0122@gmail.com']
let phone=['9876543210', '8876543210', '9876567210']
let msg=['hello', 'hi', 'hello world']
for(let i=0; i<3; i++)
{
    it(`Enter values in Tab ${i+1}`, async () => {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[i+1]);
        await contactUsPage.passValues(`${fname[i]} ${lname[i]}`, `${mail[i]}`, `${phone[i]}`, `${msg[i]}`)
        await expect(browser).toHaveUrl(`https://demotmwebsite.github.io/thankyou.html?fname=${fname[i]}+${lname[i]}`)
        expect(await thankYouPage.$thankYou().isDisplayed())
        .withContext('Expect THANK YOU! header to be displayed') 
    })
}

// it('Fill Tab 1 with details', async () => {
//     const handles = await browser.getWindowHandles();
//     await browser.switchToWindow(handles[1]);
//     await contactUsPage.passValues1();
//     await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?fname=Athira+Soman')
//     expect((await thankYouPage.$thankYou()).isDisplayed())
//     .withContext('Expect THANK YOU! header to be displayed') 
// })

// it('Fill Tab 2 with details', async () => {
//     const handles = await browser.getWindowHandles();
//     await browser.switchToWindow(handles[2]);
//     await contactUsPage.passValues2();
//     await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?fname=Honey+Sebastian')
//     expect((await thankYouPage.$thankYou()).isDisplayed())
//     .withContext('Expect THANK YOU! header to be displayed') 
// })

// it('Fill Tab 3 with details', async () => {
//     const handles = await browser.getWindowHandles();
//     await browser.switchToWindow(handles[3]);
//     await contactUsPage.passValues3();
//     await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?fname=Krishna+K')
//     expect((await thankYouPage.$thankYou()).isDisplayed())
//     .withContext('Expect THANK YOU! header to be displayed') 
// })

it('Switch to parent tab', async () => {
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    expect(await landingPage.$header().isDisplayed())
    .withContext('Expect MavenKonnect to be displayed')
    .toBeTrue()
})

it('Check the yellow colors of the small circles on the Landing page', async()=>{
    await landingPage.clickIndicator()
    expect(await landingPage.$activeIndicator().isDisplayed())
    .withContext("Active indicator is not displayed")
    .toBeTrue()
})

it('Click on User icon in Landing page', async () => {
    await landingPage.clickUserIcon()
    expect(await checkOutPage.$checkOutHeader().isDisplayed())
    .withContext('Expect Check Out karo ! to be displayed')
    .toBeTrue();
})

it('Enter details in Check Out page and checkout', async () => {
    await checkOutPage.enterDetails()
    const handles = await browser.getWindowHandles()
    await browser.switchWindow('https://demotmwebsite.github.io/');
    await expect(browser).toHaveUrl('https://demotmwebsite.github.io/thankyou.html?firstname=Athira+Soman&email=athira01081998%40gmail.com&address=542+W.+15th+Street&city=New+York&state=NY&zip=10001&cardname=Athira&cardnumber=1111-2222-3333-4444&expmonth=September&expyear=2026&cvv=352&sameadr=on')
    expect(await thankYouPage.$thankYou().isDisplayed())
    .withContext('Expect THANK YOU! header to be displayed')
})

})
