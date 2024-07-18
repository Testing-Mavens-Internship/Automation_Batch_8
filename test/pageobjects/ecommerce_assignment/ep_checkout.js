import Common from "./ep_common.js";

class Checkout extends Common
{
    constructor()
    {
        super()
        this.$checkout=()=>$(`//a[@href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout"]`)
        this.$fname=()=>$(`//input[@name="firstname"]`)
        this.$lname=()=>$(`//input[@name="lastname"]`)
        this.$company=()=>$(`//input[@name="company"]`)
        this.$address1=()=>$(`//input[@name="address_1"]`)
        this.$address2=()=>$(`//input[@name="address_2"]`)
        this.$city=()=>$(`//input[@name="city"]`)
        this.$postcode=()=>$(`//input[@name="postcode"]`)
        this.$countrydropdown=()=>$(`//select[@name="country_id"]`)
        this.$country=()=>$(`//select[@name="country_id"]/option[text()='India']`)
        this.$regiondropdown=()=>$(`//select[@name="zone_id"]`)
        this.$region=()=>$(`//select[@name="zone_id"]/option[text()='Kerala']`)
        this.$agree=()=>$(`//label[@for="input-agree"]`)
        this.$continue=()=>$(`//button[@id="button-save"]`)
        this.$confirmorder=()=>$(`//h1[text()='Confirm Order']`)
    }
    async checkoutfunction()
    {
        await this.$checkout().click()
        await this.$fname().setValue("Jack")
        await this.$lname().setValue("Smith")
        await this.$company().setValue("Lambdatest")
        await this.$address1().setValue("123, Test Street")
        await this.$address2().setValue("Test City")
        await this.$city().setValue("Banglore")
        await this.$postcode().setValue("123456")
        await this.$countrydropdown().click()
        await this.$country().click()
        await this.$regiondropdown().waitForDisplayed({timeout:10000})
        await this.$regiondropdown().click()
        await this.$region().click()
        await this.$agree().click()
        await this.$continue().click()
    }
}
export default new Checkout()