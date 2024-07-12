import Common from "./common.js";

class HomePage extends Common
{
    constructor()
    {
        super()
        this.$header=()=>$(`//span[normalize-space()='MavenKonnect']`)
        this.$contactbtn=()=>$(`(//a[normalize-space()='Contact Us'])[2]`)
        this.$usericon=()=>$(`//i[@class='fa fa-user']`)
        this.$$totalcircles=()=>$$(`//li[@data-target="#customCarousel1"]`)
        this.$circle=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        this.$activecircle=()=>$(`//li[@data-target="#customCarousel1" and @class='active']`)
    }
    async clickBtn()
    {
        await this.$contactbtn().click()
    }
    async clickUserIcon()
    {
        await this.$usericon().click()
    }
    async validatecolor()
    {
        let ccount=this.$$totalcircles().length
        for(let i=1;i<=ccount;i++)
        {
            await this.$circle(i).click()
        }
    }
    
}
export default new HomePage()