import CommonPage from "./commonPage.js";

class BookingPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$validateLine=()=> $('')
            this.$validateNights=()=> $('')
            this.$firstBookNowBtn=()=> $('(//a[@class="booknow ng-tns-c40-0" and text()="Book now"])[1]')
            this.$ratesUnavailableMsg=()=> $('//div[@class="ng-tns-c21-4 toast-message ng-star-inserted"]')
            //text:  Rates are not available for Selected Cabin, Try another Cabin 
        }
    }

    async clickBookNow()
    {
        await this.$firstBookNowBtn().click()
    }
}
export default new BookingPage()
