import Common from "./sauceDemoCommon.js";

class Checkout extends Common
{
    constructor()
    {
        super()
        this.$cartIcon=()=>$('//a[@class="shopping_cart_link"]')
        this.$checkOutButton=()=>$('//button[@id="checkout"]')
        this.$firstName=()=>$('//input[@placeholder="First Name"]')
        this.$lastName=()=>$('//input[@placeholder="Last Name"]')
        this.$postalCode=()=>$('//input[@id="postal-code"]')
        this.$submitButton=()=>$('//input[@type="submit"]')
        this.$finishButton=()=>$('//button[@id="finish"]')
        this.$lastHeader=()=>$('//h2[text()="Thank you for your order!"]')
    }

    /**
     * Proceed to checkout
     */
    async checkOut()
    {
     await this.$cartIcon().click()
     await this.$checkOutButton().waitForClickable()
     await this.$checkOutButton().click()  
     await this.$submitButton().waitForClickable()
     await this.$firstName().setValue("Mithun")
     await this.$lastName().setValue("Kumar")
     await this.$postalCode().setValue("673275")
     await this.$submitButton().click()
     await this.$finishButton().click() 

    }
}
export default new Checkout()