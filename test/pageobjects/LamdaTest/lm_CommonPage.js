export default class CommonPage
{
    constructor()
    {
        this.$lamdatestHeader = () => $('//a[@title="Poco Electro"]');
       

    }

/**
 * launch url for the website
 */

    async LaunchUrl()
    {
        await browser.url('https://ecommerce-playground.lambdatest.io')
        browser.maximizeWindow();
    }

}