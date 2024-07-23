export default class CommonPage {
    constructor()
    {
        this.$automateNowLogo = () => $('//a[@class="logo logo-left with-image l m  "]');
        this.$returnToHome =() => $('//a[text()="Home"]')
    }

   /**
   * Launch URL of the website
   */
    async launchUrl()
    {
        await browser.url('https://practice-automation.com')
        browser.maximizeWindow()
    }

   /**
    * Return back to the home page
    */
    async clickReturnToHome()
   {
     await this.$returnToHome().scrollIntoView();
     await this.$returnToHome().click();
   }

}