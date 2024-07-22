export default class Common{
    constructor(){
        this.$gesturePageHeader=()=>$(`//h1[text()="Gestures"]`);
        this.$calendarPageHeader=()=>$(`//h1[text()="Calendars"]`);
        this.$home=()=>$(`//a[text()="Home"]`);

    }
    /**
     * Launch the url in the browser
     */
    async launchUrl(){
        await browser.url("https://practice-automation.com");
        browser.maximizeWindow();
    }
    /**
     * Click on the 'Home' option     
     */
    async clickHome(){
        await this.$home().waitForClickable({timeout:5000,timeoutMsg:"'Home' option is still not clicked"});
        await this.$home().click();
    }
}