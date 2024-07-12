import mkcommon from "./mkCommon.js";
class mv_LandingPage extends mkcommon
{
    constructor()
    {
    super()
    this.$cntcttext=()=>$('//input[@placeholder="Full Name "]')
    this.$contactbtn=()=>$(`(//a[@class="btn1" and normalize-space(text())="Contact Us"])[1]`)
    this.$usericon=()=>$('//i[@class="fa fa-user"]')
    this.$chktxt=()=>$('//header[@id="header"]')
    this.$$totaldot=()=>$$('(//li[@data-target="#customCarousel1"])')
    this.$loopdot=(dot)=>$(`(//li[@data-target="#customCarousel1"])[${dot}]`) 
    this.$activedot=()=>$('(//li[@data-target="#customCarousel1" and @class="active"])')   
}
    async clickoncontact()
    {
       await this.$contactbtn().waitForDisplayed({timeout:15000}) 
       await this.$contactbtn().click()
    }
    async chkout()
    {
        await this.$usericon().click();

    }
    async dotclk()
    {
        let count=await this.$$totaldot().length;
        for(let i=1;i<count;i++)
        {
            await this.$loopdot(i).click()
        }
    }
}
export default new mv_LandingPage();