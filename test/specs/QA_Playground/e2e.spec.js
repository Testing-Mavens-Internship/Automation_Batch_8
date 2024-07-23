import sortableList from "../../pageobjects/QA_Playground/sortableList.js";
import sort from "../../pageobjects/QA_Playground/sortWithoutArray.js";
import landObj from "../../pageobjects/QA_Playground/landingPage.js"
import ratingObj from "../../pageobjects/QA_Playground/rateingBarPage.js"
import redirectChain from "../../pageobjects/QA_Playground/redirectChain.js";

describe(`Exploring different actions in QA Playground webpage.`, () => {
  it(`Loading url of the sortable list `, async () => {
    await sortableList.launchUrl();
    await sortableList
      .$header()
      .waitForDisplayed({ timeout: 5000, timeoutMsg: "Page is not loading" });
  });
  // it(`Sorting the names with array`,async()=>{
  //     await sortableList.sorting();
  //     await sortableList.$button().click();
  //     await browser.pause(5000);
  // })
  it(`Sorting the names without array`, async () => {
    await landObj.clickSortableList();
    await sort.sortingWithoutArray();
    await landObj.clickOnBackPageOption();
  });

  it("Click on the Rating Range slider option on the website", async () => {
    await landObj.clickOnRatingRangeSlider();
    await ratingObj.setRatingBar();
    await browser.pause(1000)
    expect(await ratingObj.$feedbackButton().isDisplayed())
    .withContext('The Feedback button is to be displayed')
    .toBeTrue();
    await ratingObj.$feedbackButton().click();
  });

  it(`Redirecting Chaining.`, async () => {
    await landObj.clickOnBackPageOption();
    await landObj.clickOnRedirectChainOption();
    await redirectChain.chaining();
    expect( await redirectChain.$lastLocator()).toBeDisplayed()
  });
});
