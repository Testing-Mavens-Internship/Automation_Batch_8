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
        this.$countryDropdown=()=>$(`//select[@name="country_id"]`)
        this.$country=()=>$(`//select[@name="country_id"]/option[text()='India']`)
        this.$regionDropdown=()=>$(`//select[@name="zone_id"]`)
        this.$region=()=>$(`//select[@name="zone_id"]/option[text()='Kerala']`)
        // this.$countryDropdown=()=> $('//select[@name="country_id"]')
        // this.$valueIndia=()=> $('/html/body/div[1]/div[5]/div[1]/div/div/form/div/div[1]/div/div[2]/div[1]/div[8]/div/select/option[107]')
        // this.$stateDropdown=()=> $('//select[@name="zone_id"]')
        // this.$valueKerala=()=> $('/html/body/div[1]/div[5]/div[1]/div/div/form/div/div[1]/div/div[2]/div[1]/div[9]/div/select/option[17]')
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
        await this.$country().waitForDisplayed({ timeout: 5000 })
        await this.$country().click()
        await this.$regionDropdown().click()
        await this.$region().waitForDisplayed({ timeout: 5000 })
        await this.$region().click()
        //await this.$agreePP().click()
        await this.$agreeTC().click()
        await this.$contBtn().click()
    }
}

export default new Checkout()