import tests from "../../test-data/testone.json" assert {type:'json'}
import sortObj from "../../pageobjects/qaPlayground/sortList.js"

describe("Sort the names accordingly and check correct or not",()=>{
    it("launch url and navigate to the page",async()=>{
        await sortObj.loadurl()
        expect(await sortObj.$header().isDisplayed()).toBeTrue()
    })
    it("Sort and validate the list",async()=>{
        await sortObj.sort()
    })
})