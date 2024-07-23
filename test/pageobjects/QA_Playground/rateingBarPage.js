import Common from "./common.js";
 
 
class RatingBarPage extends Common{
   
    constructor()
    {
        super();
       
        this.$ratingBar = () => $('//input[@type="range"]')
        this.$feedbackButton = () => $('//button[@id="feedback"]')
        this.$emoji = () => $('//ul[@class="emojis"]')       
    }
 
 
    /**
     * Slide the rating range slider until the ‘Send Feedback’ button is displayed.
     */
 
    async setRatingBar()
    {
        await this.$ratingBar().click();
        await this.$ratingBar().setValue(40);
        await this.$qaPlayGroundHeader().waitForDisplayed({timeout : 5000})
       
    }

   
 
 
 
 
}
 
export default new RatingBarPage();
 