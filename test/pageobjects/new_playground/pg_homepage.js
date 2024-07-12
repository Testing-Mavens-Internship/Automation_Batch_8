import Common from "./pg_commonpage.js";

class HomePage extends Common
{
    constructor()
    {
        super()
        this.$usericon=()=>$(`//*[name()='svg' and @viewBox='0 0 320 512']`)
        this.$logout_header=()=>$(`//li[text()='Log Out']`)
        this.$shopbycategory=()=>$(`//p[text()='Shop by Category']`)
        this.$mobile=()=>$(`//li[text()='Mobiles']`)
    }
    async checkLogoutdisplayed()
    {
        await this.$usericon().waitForDisplayed({timeout:20000})
        await this.$usericon().click()
        await this.$logout_header().waitForDisplayed({timeout:20000})
    }
    async selectCategory()
    {
        await this.$shopbycategory().waitForDisplayed({timeout:20000})
        await this.$shopbycategory().click()
        await this.$mobile().waitForDisplayed({timeout:20000})
        await this.$mobile().click()
    }
}
export default new HomePage()