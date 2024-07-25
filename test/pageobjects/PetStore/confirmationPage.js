import CommonPage from "./commonPage.js";

class ConfirmationPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$confirmationHeader=()=> $('//b[text()="Order"]')
            this.$confirmButton=()=> $('//a[text()="Confirm"]')
        }
    }

     /**
     * Method to click Confirm button
     */
    async clickConfirmButton()
    {
        await this.$confirmButton().click()
    }
}
export default new ConfirmationPage()
