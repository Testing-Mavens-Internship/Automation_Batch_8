import CommonPage from "./common.js";
class Booking extends CommonPage {
  constructor() {
    super();
    this.$bookingHeader = () =>$(`//h1[text()="Book Domestic and International Cruise"]`);
    this.$enterCity=()=>$(`//input[@name="city"]`);
    this.$enterDate=()=>$(`//select[@name="sailDate"]`);
    this.$setDate=()=>$(`//option[text()="Apr-2025"]`);
    this.$enterDuration=()=>$(`//select[@name="duration"]`);
    this.$setDuration=()=>$(`//option[text()="7 To 9 night(s)"]`);
    this.$selectCruiseLine=()=>$(`//select[@id="cruiselines"]`);
    this.$setCruise=()=>$(`//option[text()="Holland America Line"]`);
    this.$searchButton=()=>$(`//button[@class="search_btn"]`);
    this.$loader=()=>$(`//img[@src="./assets/images/progress.gif"]`);
  }
  
  /**
   * To wait for display of booking page header
   */
  async bookHeader(){
    await this.$bookingHeader().waitForDisplayed({timeout: 5000});
  }

  /**
   * To enter details for booking
   */
  async enterDetails(city) {
    await this.$enterCity().setValue(city)  
    await this.$enterDate().click();
    await this.$setDate().click();
    await this.$enterDuration().click();
    await this.$setDuration().click();
    await this.$selectCruiseLine().click();
    await this.$setCruise().click();
    await this.$searchButton().click();
  }
}
export default new Booking();
