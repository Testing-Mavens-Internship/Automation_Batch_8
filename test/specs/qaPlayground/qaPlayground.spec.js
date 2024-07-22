//import sortNames from "../../pageobjects/qaPlayground/sortableListPage.js";
import slider from "../../pageobjects/qaPlayground/rangeSlider.js";

describe("QA playground.",()=>{
    it("launch the url.",async()=>{
        await slider.loadUrl();
    })
    // it("To sort a list of names according to their wealth.",async()=>{
    //     await sortNames.sortNames();
    // })

it("Slider.",async()=>{
    await slider.slide();
    await browser.pause(5000);

})
})