import Common from "./common.js";
 
 
class LandingPage extends Common{
   
    constructor()
    {
        super();
        this.$ratingRangeSliderOption = () => $('//h3[text()="Rating Range Slider"]')
        this.$emoji = () => $('//ul[@class="emojis"]')
        this.$ratingBar = () => $('//input[@type="range"]')
        this.$sorting = () => $('//h3[text()="Sortable List"]')
        this.$redirectChainOption = () => $('//h3[text()="Redirect Chain"]')
    }
 
     /**
     * click on the Rating Range slider option on the website
     */
     async clickSortableList()
     {
       await this.$sorting().scrollIntoView({ block: 'center', inline: 'center' });
       await this.$sorting().click();
    
    
     }

     /**
     * click on the Rating Range slider option on the website
     */
    async clickOnRatingRangeSlider()
    {
      await this.$ratingRangeSliderOption().scrollIntoView();
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
 