import cart from "../pageobjects/ptech/cartPage.js";
import contactus from "../pageobjects/ptech/contactUs.js";
import landingPage from "../pageobjects/ptech/landingPage.js";
import products from "../pageobjects/ptech/productsPage.js";
import solution from "../pageobjects/ptech/solutionPage.js";

describe('sort the product list', () => {
    it('launch the website', async () => {
        await landingPage.launchUrl();
        expect(await landingPage.$header().isDisplayed())
            .withContext('Expected logo should be displayed')
            .toBeTrue();
    });

    it('click Solution Dropdown', async () => {
        let selectoptions = [
            'Stock Profiling and Analysis Services',
            'Vendor Managed Inventory Solutions',
            'Stores Design And Installation'
        ];
        let fetchedoption = await landingPage.clickDropdown();
        for (let item of fetchedoption) {
            expect(selectoptions).toContain(item);
        }
    });

    it('select option Stock Profiling and Analysis Services', async () => {
        await landingPage.selectSolutionddoption();
        expect(await solution.$solutionheader().waitForDisplayed({ timeout: 4000, timeoutMsg: 'Solution header not displayed' }))
            .withContext('Expected Solution header to be displayed')
            .toBeTrue();
    });

    it('click on Make an Enquiry Button', async () => {
        await solution.clickMakeanEnquiry();
        expect(await contactus.$contactheader().waitForDisplayed({ timeout: 4000, timeoutMsg: 'Contact header not displayed' }))
            .withContext('Expected Contact header to be displayed')
            .toBeTrue();
    });

    it('click cart icon', async () => {
        await contactus.clickCart();
        expect(await cart.$emptycartheader().waitForDisplayed({ timeout: 4000, timeoutMsg: 'Empty cart header not displayed' }))
            .withContext('Expected Empty cart header to be displayed')
            .toBeTrue();
    });

    it('click Continue shopping button', async () => {
        await cart.clickContinueshop();
        expect(await products.$productsheader().waitForDisplayed({ timeout: 4000, timeoutMsg: 'Products header not displayed' }))
            .withContext('Expected Products header to be displayed')
            .toBeTrue();
    });

    it('click on the sort By Dropdown', async () => {
        await products.clickSortby();
        
    });
});
