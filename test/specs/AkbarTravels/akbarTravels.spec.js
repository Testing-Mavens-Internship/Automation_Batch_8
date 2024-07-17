import landingPage from "../../pageobjects/AkbarTravels/landingPage.js"
import foodpage from "../../pageobjects/AkbarTravels/foodpage.js"
import downloadpackage from "../../pageobjects/AkbarTravels/downloadpackage.js"
describe("Verifying the functionality of ticket booking",()=>{
    it("Launch the application",async()=>{
        await landingPage.loadUrl()
        expect(await landingPage.$header().isDisplayed()).withContext("Header is not displayed in th landing page").toBeTrue();
        await browser.pause(5000)

    })

    it("Clicking on the holidays button",async()=>{
       const handles=await browser.getWindowHandles();
         await browser.switchToWindow(handles[0]);
        await landingPage.clickOnHolidayIcon()
        expect(await landingPage.$holidayPageHeader().isDisplayed())
        expect(await landingPage.$holidayPageHeader().waitForDisplayed(({timeout:10000,timeoutMsg:"Header not found"})))
    })

    it("clicking on scroll to see more button",async()=>{
        const handles=await browser.getWindowHandles();
         await browser.switchToWindow(handles[1]);
        await landingPage.clickOnScrollButton();
       expect(await landingPage.$holidayPageHeader().waitForDisplayed(({timeout:10000,timeoutMsg:"Header not found"})))
    })

    it("Clicking on all designation",async()=>{
       const handles=await browser.getWindowHandles();
         await browser.switchToWindow(handles[1]);
        await landingPage.ClickOnDestination();
        await landingPage.$scrollHeader().isDisplayed();
        expect(await landingPage.$scrollHeader().isDisplayed()).withContext("header not found").toBeTrue();
    })

    it("Clickin on the food option",async()=>{
         const handles=await browser.getWindowHandles();
         await browser.switchToWindow(handles[1]);
        await landingPage.clickOnfood();
    })
    it("selecting akbar recommended option from recommended option",async()=>{
         const handles=await browser.getWindowHandles();
         await browser.switchToWindow(handles[1]);
        await foodpage.clickOnAkbarRecommend();
        expect(await foodpage.$foodheader().waitForDisplayed())
    })
    it("selecting family with kids option from recommended option",async()=>{
         const handles=await browser.getWindowHandles();
         await browser.switchToWindow(handles[1]);
        await foodpage.clickOnFamilyWithKids(({timeout:10000,timeoutMsg:"Header not found"}));
    })
    it("validating the holiday list are displayed",async()=>{
        expect(await foodpage.$validateClassicVietanam().waitForDisplayed(({timeout:10000,timeoutMsg:"Header not found"})))

    })
    it("clicking on view details",async()=>{
        await foodpage.ClickOnViewDetails();
        expect(await foodpage.$packagePageHeader().waitForDisplayed(({timeout:10000,timeoutMsg:"Header not found"})))
    })
    
    it("clicking on Download package button",async()=>{
        await downloadpackage.ClickOnDownloadPackage();
        expect(await downloadpackage.$modalheader().isDisplayed).withContext("header is not displayed").toBeTrue();
    })

    
})