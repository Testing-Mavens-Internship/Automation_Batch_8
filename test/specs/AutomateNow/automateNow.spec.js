import landingPage from '../../pageobjects/AutomateNow/landing.js';
import gesturePage from '../../pageobjects/AutomateNow/gestures.js';
import calendarPage from '../../pageobjects/AutomateNow/calendar.js';
import dateSelect from '../../testData/date.json' assert { type: "json" };

describe('AutomateNow Website Testing', () => {
    it('Launch Url of the website', async () => {
        await landingPage.launchUrl();
        expect(await landingPage.$homePageHeader().isDisplayed())
            .withContext('The Logo is not displayed')
            .toBeTrue();
    });

    it('Click on Gestures on the Home page', async () => {
        await landingPage.clickOnGesture();
        expect(await gesturePage.$gestureHeading().isDisplayed())
            .withContext('The Gesture Heading is not displayed')
            .toBeTrue();
    });

    it('Drag and Drop the AutomateNow Logo', async () => {
        await gesturePage.dragAndDropAutomateNow();
        expect(await gesturePage.$divToDrop().isDisplayed())
            .withContext('The element is not displayed')
            .toBeTrue();
    });

    it('Click on Home icon to return back to Home page', async () => {
        await landingPage.clickReturnToHome();
        expect(await landingPage.$homePageHeader().isDisplayed())
            .withContext('The Home page header is not displayed')
            .toBeTrue();
    });

    it('Click on Calendars on the Home page', async () => {
        await landingPage.clickOnCalendar();
        const targetDate = new Date(dateSelect.date);
        await calendarPage.selectSpecificDate(targetDate);

        const selectedDate = await calendarPage.getSelectedDate();
        expect(selectedDate.toDateString())
            .withContext('The selected date does not match the target date')
            .toEqual(targetDate.toDateString());

        browser.pause(5000);
    });
});
