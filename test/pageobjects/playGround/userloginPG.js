import pgcommon from "./commonPG.js";
class userlogin extends pgcommon
{
    constructor()
    {
        super()
        this.$userloginheader=()=>$('//label[contains(text(),"Email Address")]')
        this.$usremail=()=>$('//input[@type="email"]')
        this.$usrpassword=()=>$('//input[@type="password"]')
        this.$usrloginbtn=()=>$('//button[@type="submit"]')
    }
    async userlogin()
    {
        await this.$userloginheader().waitForDisplayed({timeout:10000})
        await this.$usremail().setValue("mithunpes180@gmail.com")
        await this.$usrpassword().setValue("mithunakku555")
        await this.$usrloginbtn().click()
    }
}
export default new userlogin();