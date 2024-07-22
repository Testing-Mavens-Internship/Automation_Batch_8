import landingPage from "../../pageobjects/automateNowGestures/landingPage.js";
import gesturePage from "../../pageobjects/automateNowGestures/gesturesPage.js";


describe('AutomateNow Website Testing', () => {


    it('Launch Url of the website', async() => {
        await landingPage.launchUrl();
        await landingPage.$homePageHeader().waitForDisplayed({timeout : 5000})
        expect(await landingPage.$homePageHeader().isDisplayed())
        .withContext('The Logo is not displayed')
        .toBeTrue();   
})

it('Select Gestures from the Home page', async() => {
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



})