import landingPage from '../pageobjects/playground/landing.js'
import homePage from '../pageobjects/playground/homePage.js'
import tablePage from '../pageobjects/playground/table.js'
import animationPage  from '../pageobjects/playground/animation.js'
import toolPage from '../pageobjects/playground/tooltip.js'
import sliderPage from '../pageobjects/playground/slider.js'
import uploadPage from '../pageobjects/playground/upload.js'
 
describe("Testing components functionalities in playground site",()=>{
    it("Launch Url and validate header",async()=>{
        await landingPage.loadurl();
        expect(await landingPage.$header().isDisplayed())
            .withContext("Header is displayed")
            .toBeTrue()
    })
    it("Login and validate header",async()=>{
        await landingPage.login()
        expect(await homePage.$home().isDisplayed())
            .withContext("Homepage is displayed")
            .toBeTrue()
    })
    it("Navigate to components and validate header",async()=>{
        await homePage.componentsNavigate()
        expect(await homePage.$componentsHeader().isDisplayed())
            .withContext("Components page is loaded")
            .toBeTrue()
 
    })
    it("Open popup window component and validate header",async()=>{
        await homePage.popupLearn()
        expect(await homePage.$popupButton().isDisplayed())
            .withContext("popup button is displayed")
            .toBeTrue()
    })
    it("Click on popup and validate header",async()=>{
        await homePage.popupOpen()
        expect(await homePage.$popupHeader().isDisplayed())
            .withContext("Popup is validated")
            .toBeTrue()
    })
    it("Close popup and navigate back to component",async()=>{
        await homePage.popupClose()
        expect(await homePage.$componentsHeader().isDisplayed())
            .withContext("user is navigated back to components")
            .toBeTrue()
    })
    it("Navigate to Table component and validate header",async()=>{
        await tablePage.goToTable()
        expect(await tablePage.$tableHeader().isDisplayed())
            .withContext("Tableheader is validated")
            .toBeTrue()
    })
    it("Validate table data displayed",async()=>{
 
    })
    it("Navigate to Loading animation component and validate header",async()=>{
        await animationPage.goToAnimate()
        expect(await animationPage.$animationHeader().isDisplayed())
            .withContext("Animation is validated")
            .toBeTrue()
    })
    it("Navigate to ToolTip Component and validate header",async()=>{
        await toolPage.goToTooltip()
        expect(await toolPage.$toolTipButton().isDisplayed())
            .withContext("Tooltip is validated")
            .toBeTrue()
    })
    it("Hover on the button and validate text",async()=>{
        await toolPage.hoverCheck()
        expect(await toolPage.$hoverText().isDisplayed())
            .withContext("Hover text is validated")
            .toBeTrue()
    })
    it("Navigate to slider and validate header",async()=>{
        await sliderPage.goToSlider()
        expect(await sliderPage.$sliderHeader().isDisplayed()).toBeTrue()  
      })
      it("Set value from 50 to 0 and validate value",async()=>{
          await sliderPage.slideToZero()
          await browser.pause(5000)
      })
      it("Set value from 0 to 100 and validate value",async()=>{
          await sliderPage.slideToFull()
          await browser.pause(5000)
      })
      it("Upload file",async()=>{
          await uploadPage.uploadFile()
          expect(await uploadPage.$uploadVal())
           await browser.pause(5000)
      })
 
})