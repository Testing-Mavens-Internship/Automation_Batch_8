import components from "../pageobjects/playgroundNew/components.js";
import loadinganimation from "../pageobjects/playgroundNew/loadinganimation.js";
import login from "../pageobjects/playgroundNew/login.js";
import popwindow from "../pageobjects/playgroundNew/popwindow.js";
import slider from "../pageobjects/playgroundNew/slider.js";
import table from "../pageobjects/playgroundNew/table.js";
import tooltip from "../pageobjects/playgroundNew/tooltip.js";
import upload from "../pageobjects/playgroundNew/upload.js";

describe('Testing different components in Playground website',()=>{
    it('Launch URL',async()=>{
        await login.launchURL()
        expect(await login.$header().isDisplayed()).withContext('Playground not displayed').toBeTrue()
    })

    it('Login with valid credentials',async()=>{
        await login.login()
        expect(await login.$mainheader().isDisplayed()).withContext('Playground header not displayed').toBeTrue()
        await browser.pause(8000)
    })

    it('Select Components tab',async()=>{
        await components.selectComponents()
        expect(await components.$component_header().isDisplayed()).withContext('Component header not displayed').toBeTrue()
        await browser.pause(5000)
    })

    it('Select Pop window component to check its working and validate content',async()=>{
        await popwindow.popupFunction()
        expect(await popwindow.$popupcontent().isDisplayed()).withContext('Pop up Content not displayed').toBeTrue()
        await browser.pause(8000) 
        await popwindow.closePopup()
        expect(await popwindow.$mainheader().isDisplayed()).withContext('Playground header not displayed').toBeTrue()  
        await browser.pause(8000)    
    })

    it('Select table component to check its working and validate if name and description came in order',async()=>{
        await table.validateTable()
        expect(await table.$table_header().isDisplayed()).withContext('Table headers not displayed').toBeTrue()  
        await browser.pause(8000)
    })

    it('Select loading animation component to check its working and validate content loaded message',async()=>{
        await loadinganimation.loadAnimation()
        expect(await loadinganimation.$animation_content().isDisplayed()).withContext('Animation content not displayed').toBeTrue()
        await browser.pause(8000)
    })

    it('Select tooltip component to check its working and validate text',async()=>{
        await tooltip.tooltipFunction()
        expect(await tooltip.$tooltiptext().isDisplayed()).withContext('Tooltip text not displayed').toBeTrue()
        await browser.pause(8000)
    })

    it('Select slider component to check its working',async()=>{
        await slider.gotoSlider()
        expect(await slider.$sliderheader().isDisplayed()).toBeTrue()
    })

    it('Slide from 50 to 0',async()=>{
        await slider.slidetoZero()
        expect(await slider.$slider0().isDisplayed()).toBeTrue()
        await browser.pause(8000)
    })

    it('Slide from 0 to 100',async()=>{
        await slider.slidetoFull()
        expect(await slider.$slider100().isDisplayed()).toBeTrue()
        await browser.pause(8000)
    })

    it('Select upload file component to check its working and validate filename displayed',async()=>{
        await upload.uploadFunction()
        expect(await upload.checkFileName()).withContext('File name not correct').toBeTrue()
        await browser.pause(5000)
    })

})