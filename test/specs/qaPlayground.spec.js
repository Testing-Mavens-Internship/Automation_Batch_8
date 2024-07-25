import sortableList from "../pageobjects/QAPlayground/sortableList.js";
import ratingRangeSlider from "../pageobjects/QAPlayground/ratingRangeSlider.js";
import redirectChain from "../pageobjects/QAPlayground/redirectChain.js";

describe('QA Automation website tasks', () => {

    it('Launch URL in browser', async () => {
        await sortableList.loadUrl()
        expect(await sortableList.$header()
        .isDisplayed()).withContext('Expect header to be displayed on landing page')
        .toBeTrue()
        await browser.pause(2000)
    })

    it('Select Sortable List option from landing page', async () => {
        await sortableList.selectSortListOption()
        expect(await sortableList.$richPeopleHeader()
        .isDisplayed()).withContext('Expect header to be displayed in Sortable List page')
        .toBeTrue()
    })

    it('Sort items from Sortable List', async () => {
        await sortableList.sort()
        // expect(await sortableList.$richPeopleHeader()
        // .isDisplayed()).withContext('Expect all items to be displayed in green colour')
        // .toBeTrue()
    })

    it('Go back to all Apps', async () => {
        await sortableList.clickAppsIcon()
        expect(await sortableList.$header()
        .isDisplayed()).withContext('Expect all Apps to be displayed in landing page')
        .toBeTrue()
    })
    
    it('Select Rating Range Slider option from landing page', async () => {
        await ratingRangeSlider.selectRatingSliderOption()
        expect(await ratingRangeSlider.$sliderHeader()
        .isDisplayed()).withContext('Expect header to be displayed in Rating Range Slider page')
        .toBeTrue()
    })

    it('Drag slider till Send Feedback button is displayed', async () => {
        await ratingRangeSlider.slide()
        expect(await ratingRangeSlider.$feedbackBtn()
        .isDisplayed()).withContext('Expect Send Feedback button to be displayed')
        .toBeTrue()
    })

    it('Go back to all Apps', async () => {
        await sortableList.clickAppsIcon()
        expect(await sortableList.$header()
        .isDisplayed()).withContext('Expect all Apps to be displayed in landing page')
        .toBeTrue()
    })

    it('Select Redirect Chain option from landing page', async () => {
        await redirectChain.selectRedirectChainOption()
        expect(await redirectChain.$button()
        .isDisplayed()).withContext('Expect Start Redirection chain button to be displayed')
        .toBeTrue()
    })

    it("Click Start Redirection Chain button",async()=>{
        await redirectChain.chain()  
        expect(await redirectChain.$goBack()
        .isDisplayed()).withContext('Expect GoBack button to be displayed')
        .toBeTrue()
    })   

    it('Go back to all Apps', async () => {
        await sortableList.clickAppsIcon()
        expect(await sortableList.$header()
        .isDisplayed()).withContext('Expect all Apps to be displayed in landing page')
        .toBeTrue()
    })

    
})
