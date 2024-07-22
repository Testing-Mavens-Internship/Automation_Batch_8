import CommonPage from "./commonPage.js";
class Checkout extends CommonPage {

    constructor() {
        super();
        this.$checkoutPageHeader = () => $('//span[text()="Checkout: Your Information"]');
        this.$firstNameField = () => $('//input[@id="first-name"]');
        this.$lastNameField = () => $('//input[@id="last-name"]');
        this.$postalCodeField = () => $('//input[@id="postal-code"]');
        this.$continueButton = () => $('//input[@value="Continue"]');
        this.$overviewPageHeader = () => $('//span[text()="Checkout: Overview"]');
        this.$finishButton = () => $('//button[@id="finish"]');
        this.$orderPlacedMessage = () => $('//h2[text()="Thank you for your order!"]');
    }
    /**
     * Method to fill checkout form
     */
    async fillCheckoutForm(){
        await this.$firstNameField().setValue("john");
        await this.$lastNameField().setValue("calter");
        await this.$postalCodeField().setValue("12345");
        await this.$continueButton().click();
    }


/**
 * Method to click on finish button
 */
    async clickFinishButton(){
        await this.$finishButton().click();
        await browser.pause(3000);
    }
}export default new Checkout();