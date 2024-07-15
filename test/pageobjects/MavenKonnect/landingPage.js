import CommonPage from "./commonPage.js"

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        this.$contactUsBtn=()=> $('(//a[normalize-space()="Contact Us"])[2]')
        this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`)
        this.$indicators=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        this.$activeIndicator=()=>$(`//li[@data-target="#customCarousel1" and @class="active"]`)
        this.$userIcon=()=> $('//i[@class="fa fa-user"]')
    }

    async clickContactUs()
    {
        await this.$contactUsBtn().click()
    }

    async clickIndicator()
    {
        let indicatorCount=await this.$$totalIndicators().length;
        for(let i=1;i<=indicatorCount;i++)
        {
            await this.$indicators(i).click()
        }
    }

    async clickUserIcon()
    {
        await this.$userIcon().click()
    }

}

export default new LandingPage()
