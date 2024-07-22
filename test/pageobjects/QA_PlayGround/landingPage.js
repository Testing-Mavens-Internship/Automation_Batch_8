import CommonPage from "./commonPage.js";


class LandingPage extends CommonPage {
    
    constructor()
    {
        super();
        this.$ratingRangeSliderOption = () => $('//h3[text()="Rating Range Slider"]')
        this.$emoji = () => $('//ul[@class="emojis"]')
        this.$ratingBar = () => $('//input[@type="range"]')
        this.$redirectChainOption = () => $('//h3[text()="Redirect Chain"]')
    }

    /**
     * click on the Rating Range slider option on the website
     */
    async clickOnRatingRangeSlider()
    {
      await this.$ratingRangeSliderOption().click();
    
    
    }
   
   /**
     * click on the redirect chain option on the website
     */

   async clickOnRedirectChainOption()
   {
       await this.$redirectChainOption().scrollIntoView({ block: 'center', inline: 'center' });
       await this.$redirectChainOption().click();

   }


}

export default new LandingPage();