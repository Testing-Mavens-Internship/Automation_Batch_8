import pgcommon from "./commonPG.js";
class landing extends pgcommon
{
    constructor()
    {
        super()
        this.$landingusername=()=>$('//input[@placeholder="Username"]');
        this.$landingpassword=()=>$('//input[@placeholder="Password"]');
        this.$landingsubmitbtn=()=>$('//button[@type="submit"]');
    }
    async login()
    {
        await this.$header().waitForDisplayed({timeout:5000})
        await this.$landingusername().setValue("playground")
        await this.$landingpassword().setValue("playground@TM")
        await this.$landingsubmitbtn().click()
    }
}
export default new landing();