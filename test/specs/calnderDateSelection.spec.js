import calenderPage from "../pageobjects/calenderCheck/calenderPage.js";
import data from "../testData/Date.json" assert { type: 'json' };

let dateOne=data.date
let date =dateOne.split("-")
let day=date[2]
let month=date[1]
let year=date[0]
console.log(date,day,month,year)


describe('Open Calender page and choose a date from the calender ', () => {
    it("Load the page successfully", async () => {
        await calenderPage.loadUrl()
        expect(await calenderPage.$header().isDisplayed())
    })

    it("Choose a date from the calender", async () => {
        await calenderPage.selectDate(day,month,year)
        
    })
})