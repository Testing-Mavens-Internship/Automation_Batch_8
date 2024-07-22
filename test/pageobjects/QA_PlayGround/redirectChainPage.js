import CommonPage from "./commonPage.js";


class RedirectChainPage extends CommonPage {
    
    constructor()
    {
        super();
    
        this.$startRedirectChainButton = () => $('//a[text()="Start Redirection chain"]')
        this.$lastPage = () => $('//p[text()="Welcome to the Last Page"]')
        this.$secondPage = () => $('//p[text()="Welcome to Second Page"]')
        this.$thirdPage = () => $('//p[text()="Welcome to Third Page"]')
        this.$fourthPage = () => $('//p[text()="Welcome to Fourth Page"]')
        this.$fifthPage = () => $('//p[text()="Welcome to Fifth Page"]')
        this.$sixth = () => $('//p[text()="Welcome to Sixth Page"]')
        this.$pages = (text) => $(`//p[text()='${text}']`)
        this.$goBackButton = () => $('//a[text()="Go Back"]')
    }


    

    /**
     * click on the start redirect chain option on the Redirect chain page
     */

    // async clickOnStartRedirectChainOption()
    // {
    //     //await browser.pause(8000);
    //     await this.$startRedirectChainButton().click();
    //    // await browser.pause(8000);
    //     await this.$secondPage().waitForDisplayed({ timeout : 10000, timeoutMsg: 'Element did not appear' });
    //     //await browser.pause(1000);
    //     await this.$thirdPage().waitForDisplayed({ timeout : 5000, timeoutMsg: 'Element did not appear' });
    //     await browser.pause(3000);
    //     await this.$fourthPage().waitForDisplayed({ timeout : 5000, timeoutMsg: 'Element did not appear' });
    //     //await browser.pause(1000);
    //     await this.$fifthPage().waitForDisplayed({ timeout : 5000, timeoutMsg: 'Element did not appear' });
    //     //await browser.pause(1000);
    //     await this.$sixth().waitForDisplayed({ timeout : 10000, timeoutMsg: 'Element did not appear' });
    //     //await browser.pause(1000);
    //     await this.$lastPage().waitForDisplayed({ timeout : 5000, timeoutMsg: 'Element did not appear' });
    //     //await browser.pause(1000);

    // }

    async checkText()
    {

        await this.$startRedirectChainButton().click();
        let text = ["Welcome to Second Page", "Welcome to Third page", "Welcome to Fourth page", "Welcome to Fifth page", "Welcome to Sixth page","Welcome to the Last Page"];

        for(let item in text)
        {
            await this.$pages(item).waitForDisplayed({timeout : 10000,timeoutmsg : "page not found",reverse: true});
        }

        await this.$goBackButton().waitForDisplayed({timeout : 10000,timeoutmsg : "button not found"})
    }

   


    

    // async 
    // 

}

export default new RedirectChainPage();