import landingPage from '../pageobjects/automate/landing.js';
import gesturePage from '../pageobjects/automate/gestures.js';
import calendarPage from '../pageobjects/automate/calendar.js';
import selectDate from '../testData/date.json' assert{type: "json"}


describe('AutomateNow Website Testing', () => {
    it('Launch Url of the website', async() => {
        await landingPage.launchUrl();
        expect(await landingPage.$homePageHeader().isDisplayed())
        .withContext('The Logo is not displayed')
        .toBeTrue();   
    })

    it('click on Gestures on the Home page', async() => {
    await landingPage.clickOnGesture();  
    expect(await gesturePage.$gestureHeading().isDisplayed())
    .withContext('The Gesture Heading  is not displayed')
    .toBeTrue();
    })

    it('Drag and Drop the AutomateNow Logo', async() => {
    await gesturePage.dragAndDropAutomateNow();  
    expect(await gesturePage.$divToDrop().isDisplayed())
    .withContext('The element is not displayed')
    .toBeTrue();
    })

    it('Click on Home icon to return back to Home page', async() => {
    await landingPage.clickReturnToHome();
    expect(await landingPage.$homePageHeader().isDisplayed())
    .withContext('The Home page header is not displayed')
    .toBeTrue();
    })

    it('Click on Calendars on the Home page', async ()=>{
        await landingPage.clickOnCalendar();
        const targetDate = new Date(selectDate.date);
        await calendarPage.selectSpecificDate(targetDate);
        const finalDate = await calendarPage.getSelectedDate();
        expect(finalDate.toDateString()).toEqual(targetDate.toDateString());
    })

})