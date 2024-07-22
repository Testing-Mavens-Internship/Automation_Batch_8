import calendarPage from "../../pageobjects/AutomateNow/calendarPage.js";
import gesturesPage from "../../pageobjects/AutomateNow/gesturesPage.js";
import landingPage from "../../pageobjects/AutomateNow/landingPage.js";
import data from "../../../testData/calendar.json" assert{type:"json"}

let date=data.date.split("-");
let day=date[0];
let month=date[1];
let year=date[2];

describe("AutomateNow application end to end test flow",()=>{
    it("Launch the url in the browser",async()=>{
        await landingPage.launchUrl();
        expect (await landingPage.$header().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    });

    it("Click on 'Gestures' button",async()=>{
        await landingPage.clickGesturesButton();
        expect (await gesturesPage.$gesturePageHeader().isDisplayed()).withContext("'Gestures' header is not displayed");
    });

    it("Drag the AutomateNow logo and drop it in the other box",async()=>{
        await gesturesPage.dragBox();
        expect (await gesturesPage.$draggableImage().isDisplayed()).withContext("AutomateNow logo is not displayed");
    });

    it("Click on the 'Home' option",async()=>{
        await gesturesPage.clickHome();
        expect (await landingPage.$calendarButton().isDisplayed()).withContext("'Calendar' button is not displayed");
    });

    it("Click on 'Calendar' button",async()=>{
        await landingPage.clickCalendar();
        expect (await landingPage.$calendarPageHeader().isDisplayed()).withContext("'Calendar' header is not displayed");
    });

    it("Click on the input field to select a date ",async()=>{
        await calendarPage.clickCalendarInputField();
        expect (await calendarPage.$calendar().isDisplayed()).withContext("Calendar is not displayed");
    });

    it("Select the date",async()=>{
        await calendarPage.setDate(day,month,year)
    })
})