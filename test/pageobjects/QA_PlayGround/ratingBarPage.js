import CommonPage from "./commonPage.js";


class RatingBarPage extends CommonPage {
    
    constructor()
    {
        super();
       
        this.$ratingBar = () => $('//input[@type="range"]')
        this.$feedbackButton = () => $('//button[@id="feedback"]')
        this.$emoji = () => $('//ul[@class="emojis"]')
        this.$backPageOption = () => $('//*[local-name()="svg" and @viewBox="0 0 512 512"]')
        this.$feedbackHeader = () => $('//p[text()="Thank you for your feedback!"]')
        
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

    /**
     * click on the 'Apps' option on the top of the navigation bar to go back to the landing page
     */


    async clickOnSendFeedbackButton()
    {
        await this.$feedbackButton().click();
    }

 

}

export default new RatingBarPage();