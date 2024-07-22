import Common from "./common.js";

class LandingPage extends Common{
    constructor(){
        super();
        this.$header=()=>$(`//strong[text()="Welcome to your software automation practice website! "]`);
        this.$gesturesButton=()=>$(`//a[text()="Gestures"]`);
        this.$calendarButton=()=>$(`//a[text()="Calendars"]`);
    }
    /**
     * Click on the 'Gestures' button
     */
    async clickGesturesButton(){
        await this.$gesturesButton().waitForClickable({timeout:5000,timeoutMsg:"'Gestures' button is still not clicked."})
        await this.$gesturesButton().click();
        await this.$gesturePageHeader().waitForDisplayed({timeout:5000,timeoutMsg:"'Gestures' header is still not displayed."})
    }
    /**
     * Click on the 'Calendar' button
     */
    async clickCalendar(){
        await this.$calendarButton().waitForClickable({timeout:5000,timeoutMsg:"'Calendar' button is still not clicked."});
        await this.$calendarButton().click();
        await this.$calendarPageHeader().waitForDisplayed({timeout:5000,timeoutMsg:"'Calendar' header is still not displayed"});
    }

}
export default new LandingPage();