
export default class CommonPage {

    constructor()
    {
        this.$qaPlayGroundHeader = () => $('//span[text()="QA Playground"]');
        this.$backPageOption = () => $('//*[local-name()="svg" and @viewBox="0 0 512 512"]')

    }

/**
 * Launch URL of the website
 */
    async launchUrl()
    {
        await browser.url('https://qaplayground.dev')
        browser.maximizeWindow()
    }

    
    async clickOnBackPageOption()
    {
        await this.$backPageOption().click();
        await this.$qaPlayGroundHeader().waitForDisplayed({timeout : 5000})

    }
}