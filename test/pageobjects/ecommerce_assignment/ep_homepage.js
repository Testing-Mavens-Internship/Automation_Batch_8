import Common from "./ep_common.js";

class HomePage extends Common
{
    constructor()
    {
        super()
        this.$logo=()=>$(`//a[@title='Poco Electro']/img`)
        this.$myaccount=()=>$(`//ul[@class='navbar-nav horizontal']/li[6]/a/div`)
        this.$register=()=>$(`//span[normalize-space()='Register']`)
        this.$header=()=>$(`//h4[text()='Upto 50% Off on Fully Automatic Top Load Washing Machine']`)
        // this.$$catcount=()=>$$(`//div[@id='entry_213250']/descendant::div[2]/div`) //8
        this.$firstcat=(index)=>$(`(//div[@id='entry_213250']/descendant::div[2]/div)[${index}]`) // Desktop
    }
    async clickonRegister()
    {
        await this.$myaccount().waitForDisplayed({timeout:5000})
        await this.$myaccount().moveTo()
        await this.$register().waitForDisplayed({timeout:5000})
        await this.$register().click()

    }
    async selectcatgeory()
    {
        await this.$firstcat(1).click()
    }
    
}
export default new HomePage()