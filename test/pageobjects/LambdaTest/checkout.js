class Checkout {

    constructor()
    {
        this.$checkoutHeader=()=> $('//h4[text()="Your Personal Details"]')
        this.$fname=()=> $('//input[@name="firstname"]')
        this.$lname=()=> $('//input[@name="lastname"]')
        //this.$email=()=> $('//input[@name="email"]')
        //this.$telephone=()=> $('//input[@name="telephone"]')
        //this.$pswd=()=> $('//input[@name="login_password"]')
        //this.$pswdConfirm=()=> $('//input[@name="confirm"]')

        this.$company=()=> $('//input[@name="company"]')
        this.$address1=()=> $('//input[@name="address_1"]')
        this.$address2=()=> $('//input[@name="address_2"]')
        this.$city=()=> $('//input[@name="city"]')
        this.$postCode=()=> $('//input[@name="postcode"]')
        this.$countryDropdown=()=> $('//select[@name="country_id"]')
        this.$valueIndia=()=> $('//*[@id="input-payment-country"]/option[107]')
        this.$stateDropdown=()=> $('//select[@name="zone_id"]')
        this.$valueKerala=()=> $('//*[@id="input-payment-zone"]/option[17]')
        //this.$agreePP=()=> $('')
        this.$agreeTC=()=> $('')
        this.$contBtn=()=> ('//button[text()="Continue "]')
    
    }

    async fillDetails()
    {
        await this.$fname().setValue("Athira")
        await this.$lname().setValue("Soman")
        //await this.$email().setValue("athira1998@gmail.com")
        //await this.$telephone().setValue("9876543210")
        //await this.$pswd().setValue("Athira@1998")
        //await this.$pswdConfirm().setValue("Athira@1998")

        await this.$company().setValue("Testing Mavens")
        await this.$address1().setValue("Carnival")
        await this.$address2().setValue("Infopark")
        await this.$city().setValue("Kochi")
        await this.$postCode().setValue("686585")
        await this.$countryDropdown().click()
        await browser.pause(2000)
        await this.$valueIndia().click()
        await this.$stateDropdown().click()
        await browser.pause(2000)
        await this.$valueKerala().click()
        //await this.$agreePP().click()
        await this.$agreeTC().click()
        await this.$contBtn().click()
    }
}

export default new Checkout()