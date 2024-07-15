import Common from "./common.js"

class Register extends Common {

    constructor()
    {
        super()
        this.$regHeader=()=> $('//h1[text()="Register Account"]')
        this.$fname=()=> $('//input[@placeholder="First Name"]')
        this.$email=()=> $('//input[@placeholder="E-Mail"]')
        this.$telephone=()=> $('//input[@placeholder="Telephone"]')
        this.$pswd=()=> $('//input[@placeholder="Password"]')
        this.$pswdConfirm=()=> $('//input[@placeholder="Password Confirm"]')
        this.$checkBox=()=> $('//label[@for="input-agree"]')
    }

    async enterDetails()
    {
        await this.$fname().setValue("Athira")
        await this.$lname().setValue("Soman")
        await this.$email().setValue("athira9099@gmail.com")
        await this.$telephone().setValue("9876543210")
        await this.$pswd().setValue("Athira@1998")
        await this.$pswdConfirm().setValue("Athira@1998")
        await this.$checkBox().click()
        await this.$submitBtn().click()
    }
}

export default new Register()
