import Common from "./common.js";

class CheckoutPage extends Common {

    constructor()
    {
        super()
        this.$checkoutHeader=()=> $('//span[@class="title"]')
        this.$fname=()=> $('//input[@name="firstName"]')
        this.$lname=()=> $('//input[@name="lastName"]')
        this.$zip=()=> $('//input[@name="postalCode"]')
        this.$contButton=()=> $('//input[@name="continue"]')
        this.$checkoutHeader2=()=> $('//span[@class="title"]')
        this.$finishButton=()=> $('//button[@id="finish"]')
        this.$thankYouMsg=()=> $('//h2[@class="complete-header"]')
    }

    async enterDetails()
    {
        await this.$fname().setValue('Athira')
        await this.$lname().setValue('Soman')
        await this.$zip().setValue(678546)
        await browser.pause(2000)
        await this.$contButton().click()
    }

    async clickFinishButton()
    {
        await this.$finishButton().click()
    }

}

export default new CheckoutPage()
