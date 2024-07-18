import CommonPage from "./commonPage.js";

class ShippingAndPaymentPage extends CommonPage {

    constructor()
    {
        super()
        this.$shippingHeader=()=> $('//div[text()="Shipping Address"]')
        this.$email=()=> $('//div[@class="control _with-tooltip"]/input[@id="customer-email"]')
        this.$firstname=()=> $('//input[@name="firstname"]')
        this.$lastname=()=> $('//input[@name="lastname"]')
        this.$company=()=> $('//input[@name="company"]')
        this.$address=()=> $('//input[@name="street[0]"]')
        this.$city=()=> $('//input[@name="city"]')
        this.$stateDropdown=()=> $('//select[@name="region_id"]')
        this.$stateValue=()=> $('//option[@data-title="Alaska"]')
        this.$zip=()=> $('//input[@name="postcode"]')
        this.$phone=()=> $('//input[@name="telephone"]')
        this.$shippingMethod=()=> $('//input[@type="radio" and @value="tablerate_bestway"]')
        this.$nextButton=()=> $('//button[@data-role="opc-continue" and @type="submit"]')
        this.$paymentHeader=()=> $('//div[text()="Payment Method"]')
    }

    async enterDetails(mail, fname, lname, comp, addr, ct, zp, number)
    {
        await this.$email().setValue(mail)
        await this.$firstname().setValue(fname)
        await this.$lastname().setValue(lname)
        await this.$company().setValue(comp)
        await this.$address().setValue(addr)
        await this.$city().setValue(ct)
        await this.$stateDropdown().click()
        await this.$stateValue().waitForDisplayed({ timeout: 5000 })
        await this.$stateValue().click()
        await this.$zip().waitForDisplayed({ timeout: 5000 })
        await this.$zip().setValue(zp)
        await this.$phone().setValue(number)
        await this.$shippingMethod().click()
        await this.$nextButton().click()
        await browser.pause(2000)
    }
}

export default new ShippingAndPaymentPage()
