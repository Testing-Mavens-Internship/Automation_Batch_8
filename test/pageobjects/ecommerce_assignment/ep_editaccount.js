import Common from "./ep_common.js";

class EditAccount extends Common
{
    constructor()
    {
        super()
        this.$editicon=()=>$(`(//a[@class="d-inline-flex text-decoration-none text-reset flex-column my-3"])[1]`)
        this.$lastname=()=>$(`//input[@name='lastname']`)
        this.$continuebtn=()=>$(`//input[@value="Continue"]`)
        this.$success=()=>$(`//div[@class='alert alert-success alert-dismissible' and text()=' Success: Your account has been successfully updated.']`)
        this.$home=()=>$(`//span[normalize-space()='Home']`)
    }
    async selectEditIcon()
    {
        await this.$editicon().click()
    }
    async editinfo()
    {
        await this.$lastname().addValue(' '+'Smith')
        await this.$continuebtn().click()
        await this.$success().waitForDisplayed({timeout:5000})
    }
    async selectHome()
    {
        await this.$home().click()
    }
}
export default new EditAccount()