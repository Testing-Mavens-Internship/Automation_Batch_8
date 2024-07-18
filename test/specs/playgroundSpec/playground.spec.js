import landObj from "../../pageobjects/playgroundComponents/playgroundLanding.js"
import homeObj from "../../pageobjects/playgroundComponents/playgroundHome.js"
import tableObj from "../../pageobjects/playgroundComponents/playgroundTable.js"
import animObj  from "../../pageobjects/playgroundComponents/playgroundAnimation.js"
import toolObj from "../../pageobjects/playgroundComponents/playgroundToolTip.js"
import sliderObj from "../../pageobjects/playgroundComponents/playgroundSlider.js"
import uploadObj from "../../pageobjects/playgroundComponents/playgroundUpload.js"


describe("Testing components functionalities in playground site",()=>{
    it("Launch Url and validate header",async()=>{
        await landObj.loadurl();
        expect(await landObj.$header().isDisplayed()).withContext("Header not found").toBeTrue()
    })
    it("Login and validate header",async()=>{
        await landObj.login()
        expect(await homeObj.$home().isDisplayed()).withContext("Header not found").toBeTrue()
    })
    it("Navigate to components and validate header",async()=>{
        await homeObj.componentsnavigate()
        expect(await homeObj.$componentsheader().isDisplayed()).withContext("Header not found").toBeTrue()

    })
    it("Open popup window component and validate header",async()=>{
        await homeObj.popuplearn()
        expect(await homeObj.$popupbutton().isDisplayed()).withContext("Button is not displayed").toBeTrue()
    })
    it("Click on popup and validate header",async()=>{
        await homeObj.popupopen()
        expect(await homeObj.$popupheader().isDisplayed()).toBeTrue()
    })
    it("Close popup and navigate back to component",async()=>{
        await homeObj.popupclose()
        expect(await homeObj.$componentsheader().isDisplayed()).withContext("Header not found").toBeTrue()
    })
    it("Navigate to Table component and validate header",async()=>{
        await tableObj.gototable()
        expect(await tableObj.$tableheader().isDisplayed()).toBeTrue()
    })
    it("Validate table data displayed",async()=>{
        
    })
    it("Navigate to Loading animation component and validate header",async()=>{
        await animObj.gotoanimate()
        expect(await animObj.$animationheader().isDisplayed()).toBeTrue()
    })
    it("Navigate to ToolTip Component and validate header",async()=>{
        await toolObj.gototooltip()
        expect(await toolObj.$tooltipbutton().isDisplayed()).toBeTrue()
    })
    it("Hover on the button and validate text",async()=>{
        await toolObj.hovercheck()
        expect(await toolObj.$hovertext().isDisplayed()).toBeTrue()
    })
    it("Navigate to slider and validate header",async()=>{
      await sliderObj.gotoslider()
      expect(await sliderObj.$sliderheader().isDisplayed()).toBeTrue()  
    })
    it("Set value from 50 to 0 and validate value",async()=>{
        await sliderObj.slidetozero()
        expect(await sliderObj.$sliderzeroheader().isDisplayed()).withContext("Value is not 0").toBeTrue()
       
    })
    it("Set value from 0 to 100 and validate value",async()=>{
        await sliderObj.slidetofull()
        expect(await sliderObj.$sliderfullheader().isDisplayed()).withContext("Value is not 100").toBeTrue()
        
    })
    it("Navigate to upload component and validate header",async()=>{
        await uploadObj.gotoupload()
        expect(await uploadObj.$uploadbutton().isDisplayed()).toBeTrue()
    })
    it("Upload file",async()=>{
        await uploadObj.uploadfile()
        expect(await uploadObj.$uploadval())
    })

})