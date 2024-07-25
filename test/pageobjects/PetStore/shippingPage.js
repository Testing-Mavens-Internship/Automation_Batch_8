import CommonPage from "./commonPage.js";

class ShippingPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$shippingHeader=()=> $('//th[text()="Shipping Address"]')
            this.$fname=()=> $('//input[@name="order.shipToFirstName"]')
            this.$lname=()=> $('//input[@name="order.shipToLastName"]')
            this.$addr1=()=> $('//input[@name="order.shipAddress1"]')
            this.$addr2=()=> $('//input[@name="order.shipAddress2"]')
            this.$city=()=> $('//input[@name="order.shipCity"]')
            this.$state=()=> $('//input[@name="order.shipState"]')
            this.$zip=()=> $('//input[@name="order.shipZip"]')
            this.$country=()=> $('//input[@name="order.shipCountry"]')
            this.$continueButton=()=> $('//input[@name="newOrder"]')
        }
    }

     /**
     * Method to enter details in Shipping page
     */
    async enterDetails()
    {
        await this.$fname().setValue("Athira")
        await this.$lname().setValue("S")
        await this.$addr1().setValue("Carnival")
        await this.$addr2().setValue("Infopark")
        await this.$city().setValue("Kochi")
        await this.$state().setValue("Kerala")
        await this.$zip().setValue(634567)
        await this.$country().setValue("India")
        await this.$continueButton().click()
    }
}
export default new ShippingPage()
