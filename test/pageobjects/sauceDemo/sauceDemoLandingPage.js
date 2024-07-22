import Common from "./sauceDemoCommon.js";
class Landing extends Common
{
    constructor()
    {
        super()
        this.$userNameInput=()=>$('//input[@placeholder="Username"]')
        this.$passwordInput=()=>$('//input[@placeholder="Password"]')
        this.$userNameList=()=>$('//div[@id="login_credentials"]')
        this.$passwordList=()=>$('//div[@class="login_password"]')
        this.$loginButton=()=>$('//input[@type="submit"]')
    }

    /**
     * Enter username and password 
     */
    async enterCredentials()
    {
        let arr=[]
        arr=await this.$userNameList().getText()
        const eachItem=arr.split("\n")
        const user=eachItem[1]
        let arr2=[]
        arr2=await this.$passwordList().getText()
        const passwordFetch=arr2.split("\n")
        const passwords=passwordFetch[1]
        await this.$userNameInput().setValue(user)
        await this.$passwordInput().setValue(passwords)
        await this.$loginButton().click()
        if(await browser.isAlertOpen())
        {
            await browser.acceptAlert()
        }

    }
}
export default new Landing()