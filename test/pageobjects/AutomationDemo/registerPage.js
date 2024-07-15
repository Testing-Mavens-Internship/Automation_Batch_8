import CommonPage from "./commonPage.js"

class Register extends CommonPage {

    constructor()
    {
        super()
        this.$header=()=> $('//h2[text()="Register"]')
        this.$fname=()=> $('//input[@placeholder="First Name"]')
        this.$lname=()=> $('//input[@placeholder="Last Name"]')
        this.$address=()=> $('//textarea[@class="form-control ng-pristine ng-untouched ng-valid"]')
        this.$email=()=> $('//input[@type="email"]')
        this.$phone=()=> $('//input[@type="tel"]')
        this.$gender=()=> $('//input[@value="FeMale"]')
        this.$hobbies=()=> $('//input[@value="Movies"]')
        this.$langDropdown=()=> $('//div[@id="msdd"]')
        this.$langSelect=()=> $('//li/a[text()="English"]')
        this.$skillsDropdown=()=> $('//select[@id="Skills"]')
        this.$skillsSelect=()=> $('//option[text()="Art Design"]')
        this.$countryDropdown=()=> $('//select[@id="countries"]')
        this.$countrySelect=()=> $('//option[text()="Select Country"]')
        this.$countryDropdown1=()=> $('//option[text()="Select Country"]')
        this.$countrySelect1=()=> $('//li[text()="India"]')
        this.$yearDropdown=()=> $('//select[@placeholder="Year"]')
        this.$yearSelect=()=> $('//option[text()="1998"]')
        this.$monthDropdown=()=> $('//select[@placeholder="Month"]')
        this.$monthSelect=()=> $('//option[text()="August"]')
        this.$dayDropdown=()=> $('//select[@placeholder="Day"]')
        this.$daySelect=()=> $('//option[text()="1 "]')
        this.$pswd=()=> $('//input[@id="firstpassword"]')
        this.$pswdConfirm=()=> $('//input[@id="secondpassword"]')
        this.$chooseFile=()=> $('//input[@id="imagesrc"]')
        //this.$submitBtn=()=> $('//button[@id="submitbtn"]')
    }

    async enterDetails(fname, lname, address, email, phone, pswd, pswdConfirm)
    {
        await this.$fname().setValue(fname)
        await this.$lname().setValue(lname)
        await this.$address().setValue(address)
        await this.$email().setValue(email)
        await this.$phone().setValue(phone)
        await this.$gender().click()
        await this.$hobbies().click()
        // await this.$langDropdown().click()
        // await this.$langSelect().click()
        await this.$skillsDropdown().click()
        await this.$skillsSelect().click()
        await this.$countryDropdown().click()
        await this.$countrySelect().click()
        // await this.$countryDropdown1().click()
        // await this.$countrySelect1().click()
        await this.$yearDropdown().click()
        await this.$daySelect().click()
        await this.$monthDropdown().click()
        await this.$monthSelect().click()
        await this.$dayDropdown().click()
        await this.$daySelect().click()
        await this.$pswd().setValue(pswd)
        await this.$pswdConfirm().setValue(pswdConfirm)
    }

    async uploadFile()
    {
        const filePath = 'upload/Bug_ID#2.PNG'
        const remoteFilePath = await browser.uploadFile(filePath)
        await this.$chooseFile().setValue(remoteFilePath)
    }
}

export default new Register()
