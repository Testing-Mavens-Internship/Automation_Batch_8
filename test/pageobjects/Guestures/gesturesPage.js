import axios from "axios";
import CommonPage from "./commonPage.js";
class GesturesPage extends CommonPage {
    
    constructor()
    {
        super();

        
        this.$boxToDrag =() => $('//div[@id="moveMe"]')
        this.$divToDrag =() => $('//div[@id="div1"]')
        this.$divToDrop =() => $('//div[@id="div2"]') 
        this.$gestureHeading =() => $('//h1[text()="Gestures"]')
        this.$homeLink =() => $('//a[text()="Home"]')
        this.$calenderButton =() => $('//a[text()="Calendars"]')
        this.$calenderField =() => $('//input[@id="g1065-selectorenteradate"]')
        this.$calenderPreviousButton =() => $('//a[@title="Previous"]')
        this.$calenderMonth =() => $('//span[@class="ui-datepicker-month"]')
        this.$calenderYear =() => $('//span[@class="ui-datepicker-year"]')
        this.$calenderDay =() => $('//table//a[text()="1"]')
        this.$calendarHeaderText=() => $('//h1[text()="Calendars"]')
    
    }

    /**
     *   Drag and Drop Automate Now logo to a box on the screen
     */
    async dragAndDropAutomateNow()
    {
 
      const source = await this.$divToDrag();
      const target = await this.$divToDrop();
      await source.dragAndDrop(target);
      await this.$divToDrop().waitForDisplayed({timeout : 5000,timeoutMsg : 'element not visible'});
    
    }
    /**
     * Method to verify the response message contain the status code 404.
     * @returns error response
     */
    async verifyBrokenLink() {
      await browser.url("https://practice-automation.com/broken-links/");
      try {
          const response = await axios.get("https://practice-automation.com/broken-links/missing-page.html");
          return response;
      } catch (error) {
          return error.response;
      }
  }

  /**
   * Method to select date from calender.
   * @param {*} month 
   * @param {*} year 
   */
  async selectDate(month, year){
    await this.$homeLink().click();
    await this.$calenderButton().click();
    await this.$calendarHeaderText().waitForDisplayed();
    await this.$calenderField().click();
    while(true){
      let currentMonth = await this.$calenderMonth().getText();
      let currentYear = await this.$calenderYear().getText();
      console.log("current month => "+currentMonth+"Current Year => "+ currentYear);
      if(currentMonth === month && currentYear === year){
        break;
      }else{
        await this.$calenderPreviousButton().waitForClickable();
        await this.$calenderPreviousButton().click();
      }
    }
    await this.$calenderDay().click();
    await browser.pause(5000);
  }

}

export default new GesturesPage();