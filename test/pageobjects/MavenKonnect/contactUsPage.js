import CommonPage from "./commonPage.js";

class ContactPage extends CommonPage {

    constructor()
    {
        super()
        this.$contactPageHeader=()=> $('//h2[normalize-space()="Contact Us"]')
        this.$fullName=()=> $('//input[@placeholder="Full Name "]')
        this.$email=()=> $('//input[@placeholder="Email"]')
        this.$phoneNumber=()=> $('//input[@placeholder="Phone number"]')
        this.$message=()=> $('//input[@placeholder="Message"]')
        this.$sendBtn=()=> $('(//button[@type="submit"])[1]')
    }

    async passValues(name, mail, phone, msg)
    {
        await this.$fullName().setValue(name)
        await this.$email().setValue(mail)
        await this.$phoneNumber().setValue(phone)
        await this.$message().setValue(msg)
        await this.$sendBtn().click()
        await browser.acceptAlert()
    }

    // async passValues1()
    // {
    //     await this.$fullName().setValue("Athira Soman")
    //     await this.$email().setValue("athira01081998@gmail.com")
    //     await this.$phoneNumber().setValue("9876543210")
    //     await this.$message().setValue("hello")
    //     await this.$sendBtn().click()
    //     await browser.acceptAlert()
    // }

    // async passValues2()
    // {
    //     await this.$fullName().setValue("Honey Sebastian")
    //     await this.$email().setValue("honey0122@gmail.com")
    //     await this.$phoneNumber().setValue("8876543210")
    //     await this.$message().setValue("hi")
    //     await this.$sendBtn().click()
    //     await browser.acceptAlert()
    // }

    // async passValues3()
    // {
    //     await this.$fullName().setValue("Krishna K")
    //     await this.$email().setValue("krishna0122@gmail.com")
    //     await this.$phoneNumber().setValue("9876567210")
    //     await this.$message().setValue("hello world")
    //     await this.$sendBtn().click()
    //     await browser.acceptAlert()
    // }
}

export default new ContactPage()
