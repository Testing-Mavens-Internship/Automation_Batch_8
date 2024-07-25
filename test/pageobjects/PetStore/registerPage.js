import CommonPage from "./commonPage.js";

class RegisterPage extends CommonPage {

    constructor()
    {
        super()
        {
            this.$registerHeader=()=> $('//h3[text()="User Information"]')
            this.$userID=()=> $('//input[@name="username"]')
            this.$newPassword=()=> $('//input[@name="password"]')
            this.$repeatPassword=()=> $('//input[@name="repeatedPassword"]')

            this.$fname=()=> $('//input[@name="account.firstName"]')
            this.$lname=()=> $('//input[@name="account.lastName"]')
            this.$email=()=> $('//input[@name="account.email"]')
            this.$phone=()=> $('//input[@name="account.phone"]')
            this.$addr1=()=> $('//input[@name="account.address1"]')
            this.$addr2=()=> $('//input[@name="account.address2"]')
            this.$city=()=> $('//input[@name="account.city"]')
            this.$state=()=> $('//input[@name="account.state"]')
            this.$zip=()=> $('//input[@name="account.zip"]')
            this.$country=()=> $('//input[@name="account.country"]')

            this.$langPref=()=> $('//select[@name="account.languagePreference"]')
            this.$favCategory=()=> $('//select[@name="account.favouriteCategoryId"]')
            this.$category=()=> $('//option[@value="DOGS"]')
            this.$myList=()=> $('//input[@name="account.listOption"]')
            this.$myBanner=()=> $('//input[@name="account.bannerOption"]')
            this.$saveAccInfoBtn=()=> $('//input[@name="newAccount"]')
        }
    }

     /**
     * Method to fill details in Register page
     */
    async fillDetails()
    {
        await this.$userID().setValue(105)
        await this.$newPassword().setValue("Athira@123")
        await this.$repeatPassword().setValue("Athira@123")

        await this.$fname().setValue("Athira")
        await this.$lname().setValue("Soman")
        await this.$email().setValue("athira213@gmail.com")
        await this.$phone().setValue(9876543210)
        await this.$addr1().setValue("Carnival Infopark")
        await this.$addr2().setValue("Kochi")
        await this.$city().setValue("Kochi")
        await this.$state().setValue("Kerala")
        await this.$zip().setValue(634567)
        await this.$country().setValue("India")

        await this.$favCategory().click()
        await this.$category().waitForDisplayed({ timeout: 5000 })
        await this.$category().click()
        await this.$myList().click()
        await this.$myBanner().click()
        await this.$saveAccInfoBtn().click()
    }
}
export default new RegisterPage()
