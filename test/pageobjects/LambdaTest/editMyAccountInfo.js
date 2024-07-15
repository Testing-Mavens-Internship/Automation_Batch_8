import Common from "./common.js"

class EditMyAccountInfo extends Common {

    constructor()
    {
        super()
        this.$editPageHeader=()=> $('//h1[text()="My Account Information"]')
    }

    async editLastname()
    {
        await this.$lname().setValue("S")
        await this.$submitBtn().click()
    }
}

export default new EditMyAccountInfo()