import pgcommon from "./commonPG.js";
class cartpage extends pgcommon
{
    constructor()
    {
        super()
        this.$amountdsply=(amt)=>$(`(//div[@class="flex w-1/3 items-center text-lg font-semibold"])[${amt}]`)
        this.$$amntnum=()=>$$('//div[@class="flex w-1/3 items-center text-lg font-semibold"]')
        this.$totalamnt=()=>$('//span[@class="font-bold tracking-wide text-lg font-titleFont"][text()]')
        this.$resetbtn=()=>$('//button[contains(text(),"Reset cart")]')
        this.$resetvalidate=()=>$('//h1[contains(text(),"Your Cart feels lonely.")]')
        this.$logoutdrpdwn=()=>$('//*[local-name()="svg" and @viewBox="0 0 320 512"]')
        this.$logout=()=>$('//li[text()="Log Out"]')

    }
    async calc()
    {
        let tot=0;
        let limit=await this.$$amntnum().length
        for(let i=1;i<=limit;i++)
        {
            let a=await this.$amountdsply(i).getText();
            let b=a.replace("$","")
            let amnt=parseInt(b)
            tot+=amnt;
        }
        tot=tot+20
        return tot;
    }
    async realtotal()
    {
        let a=await this.$totalamnt().getText();
        let b=a.replace("$","")
        let actual=parseInt(b)
        return actual;
    }
    async reset()
    {
        await this.$resetbtn().click()
        await this.$resetvalidate().waitForDisplayed({timeout:5000})
       
    }
    async logouts()
    {
        const news= await this.$logoutdrpdwn()
        await this.$logoutdrpdwn().waitForClickable({timeout:5000})
        await this.$logoutdrpdwn().click()
        await this.$logout().click()
    }
}
export default new cartpage()