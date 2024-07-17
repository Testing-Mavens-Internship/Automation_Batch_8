import landObj from "../../pageobjects/akbarTravels/akbarTravelsLanding.js"
import holidayObj from "../../pageobjects/akbarTravels/akbarTravelsHolidays.js"
import foodObj from "../../pageobjects/akbarTravels/akbarTravelsFoodPackages.js"
import downObj from "../../pageobjects/akbarTravels/akbarTravelsDownload.js"


let city = "Classic Vietnam";
let details=
{
    "name":"kiran",
    "number":"7837002213"
}
let random=Math.floor(Math.random()*100)
let email=`abc${random}@gmail.com`;
describe("Checking download function of akbar travels",()=>{
    it("Launch url and validate header",async()=>{
        await landObj.loadurl();
        expect(await landObj.$landingpageheader().isDisplayed()).toBeTrue();
    })
    it("Click on Holidays and validate header",async()=>{
        await landObj.holidayclicker();
        const handles=await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await landObj.$holidaypageheader().isDisplayed()).toBeTrue();
    })
    it("Click on All destination then click on Food and validate header",async()=>{
        await holidayObj.packageselect();
        await holidayObj.$foodpackageheader().waitForDisplayed({timeout:10000})
        expect(await holidayObj.$foodpackageheader().isDisplayed()).toBeTrue();
    })
    it("Click checkboxes for akbar recommended and family with kids",async()=>{
        await foodObj.clickcheckbox()
        await holidayObj.$foodpackageheader().waitForDisplayed({timeout:10000})
        expect(await holidayObj.$foodpackageheader().waitForDisplayed({timeout:5000})).toBeTrue()
    })
    it("Click on first element and validate header",async()=>{
        await foodObj.clickfirstitem(city);
        // expect(beforeText).toBe(afterText);
        })
    it("Click on Download Package and validate",async()=>{
        await downObj.downloadclick();
        expect(await downObj.$downloadheader().isDisplayed()).toBeTrue()
    })
    it("Enter details and submit",async()=>{
        await downObj.downloaddetailsenter(details.name,email,details.number);
        await downObj.download();
        expect(await downObj.$forvalidation().isDisplayed()).toBeTrue()
    })
    
})
