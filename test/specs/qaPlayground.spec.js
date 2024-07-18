import sortableList from "../pageobjects/QAPlayground/sortableList.js";

describe('QA Automation website', () => {

    it('Launch URL in browser', async () => {
        await sortableList.loadUrl()
        expect(await sortableList.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Select sort option from landing page', async () => {
        await sortableList.selectSortListOption()
        expect(await sortableList.$richPeopleHeader()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Sort items', async () => {
        await sortableList.sort()
        // expect(await sortableList.$richPeopleHeader()
        // .isDisplayed()).withContext('Expect header to be displayed')
        // .toBeTrue()
    })
})
