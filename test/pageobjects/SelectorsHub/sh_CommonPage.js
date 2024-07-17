export default class CommonPage
{
    constructor()
    {    

    }

/**
 * launch url for the website
 */

    async LaunchUrl()
    {
        await browser.url('https://selectorshub.com/xpath-practice-page')
        browser.maximizeWindow();
    }

   

}