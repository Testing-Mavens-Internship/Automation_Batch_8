import tests from "../../test-data/testone.json" assert {type:'json'}
import sortObj from "../../pageobjects/qaPlayground/sortList.js"
import sliderObj from "../../pageobjects/qaPlayground/slider.js"
import chainObj from "../../pageobjects/qaPlayground/redirectChain.js"

describe("Functionality checkings for playground",()=>{
    // it("launch url and navigate to the page",async()=>{
    //     await sortObj.loadurl()
    //     expect(await sortObj.$header().isDisplayed()).toBeTrue()  //Task 1
    // })
    // it("Sort and validate the list",async()=>{
    //     await sortObj.sort()
    // })

    // it("Load the slider page",async()=>{
    //     await sliderObj.loadurl()
    //     expect(await sliderObj.$sliderheader().isDisplayed()).toBeTrue()
    // })
    // it("Slide and click on the button then validate header",async()=>{       //task2
    //     await sliderObj.slide()
    //     expect(await sliderObj.$slidervalidater().isDisplayed()).toBeTrue()
    //     await browser.pause(5000)
    // })

    it("Load the Redirect chain page and validate header",async()=>{
        await chainObj.loadurl()
        expect(await chainObj.$chainheader().isDisplayed()).toBeTrue()
    })
    it("Verify redirection and validate header at last",async()=>{
        await chainObj.chainredirect()
        expect(await chainObj.$lastpage().isDisplayed()).toBeTrue()
    })
})