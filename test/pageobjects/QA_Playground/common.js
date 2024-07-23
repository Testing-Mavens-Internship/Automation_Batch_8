export default class Common{
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


    
    /**
     * click on the 'Apps' option on the top of the navigation bar to go back to the landing page
     */

    async clickOnBackPageOption()
    {
        await this.$backPageOption().click();
        await this.$qaPlayGroundHeader().waitForDisplayed({timeout : 5000})
 
    }
 
   
}
