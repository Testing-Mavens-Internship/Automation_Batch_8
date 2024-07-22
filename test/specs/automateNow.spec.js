import landObj from "../pageobjects/Guestures/landingPage.js";
import gesObj from "../pageobjects/Guestures/gesturesPage.js"


describe('AutomateNow Website Testing', () => {


    it('Launch Url of the website', async() => {
        await landObj.launchUrl();
        await landObj.$homePageHeader().waitForDisplayed({timeout : 5000})
        expect(await landObj.$homePageHeader().isDisplayed())
        .withContext('The Logo is not displayed')
        .toBeTrue();
})

it('click on Gestures on the Home page', async() => {
    await landObj.clickOnGesture();  
    expect(await gesObj.$gestureHeading().isDisplayed())
    .withContext('The Gesture Heading  is not displayed')
    .toBeTrue();
})

it('Drag and Drop the AutomateNow Logo', async() => {
    await gesObj.dragAndDropAutomateNow();  
    expect(await gesObj.$divToDrop().isDisplayed())
    .withContext('The element is not displayed')
    .toBeTrue();
})

it('Click on Home icon to return back to Home page', async() => {
  
    await landObj.clickReturnToHome();
    expect(await landObj.$homePageHeader().isDisplayed())
    .withContext('The Home page header is not displayed')
    .toBeTrue();
})
it('verify that the broken link response includes 404 status code', async () => {
    let response = await gesObj.verifyBrokenLink();
    expect(response.status).toEqual(404);
    console.log(response.status);
});
it('Select date from calender', async () => {
    await gesObj.selectDate("July", "2023");
})
})