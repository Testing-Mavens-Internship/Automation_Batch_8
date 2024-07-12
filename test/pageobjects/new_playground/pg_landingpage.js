import Common from "./pg_commonpage.js";

class LandingPage extends Common
{
    constructor()
    {
        super()
        this.$pg_header=()=>$(`//div[text()='PlayGround']`)
        this.$usericon=()=>$(`//*[name()='svg' and @viewBox='0 0 320 512']`)
        this.$loginoption=()=>$(`//li[text()='Login']`)
    }

    async selectLogin()
    {
        await this.$usericon().waitForDisplayed({timeout:20000})
        await this.$usericon().click()
        await this.$loginoption().waitForDisplayed({timeout:20000})
        await this.$loginoption().click()
    }
}
export default new LandingPage()