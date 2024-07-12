import CommonPage from "./mv_CommonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super();
        this.$contactUsIcon = () => $('(//a[@class="btn1" and normalize-space(text())="Contact Us"])[1]')
        this.$userIcon = () => $('//i[@class="fa fa-user"]');
        this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`)
        this.$indicators=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        this.$activeIndicator=()=>$(`//li[@data-target="#customCarousel1" and @class="active"]`)
    }


    async clickOnContactUs()
    {

        this.$contactUsIcon().click();
    }

    async clickOnUserIcon()
    {
        this.$userIcon().click(); 
    }
    
    async clickIndicator(){
        let indicatorCount=await this.$$totalIndicators().length;
        for(let i=1;i<=indicatorCount;i++){
            await this.$indicators(i).click();
        }
    }
 
}

export  default new LandingPage();