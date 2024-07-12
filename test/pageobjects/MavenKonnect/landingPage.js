import MavenCommon from "./common.js";
class LandingPageMaven extends MavenCommon{
    constructor(){
        super()
        this.$header=()=>$(`//span[normalize-space()='MavenKonnect']`)
         this.$clickContact=()=>$(`(//div[@class='btn-box']/a[@class='btn1'])[1]`)
        //  this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`)
        //  this.$singleIndicator=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        //  this.$activeIndicator=()=>$(`//ol[@class='carousel-indicators']/li[contains(@class, 'active')]`)
        this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`)
        this.$indicators=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        this.$activeIndicator=()=>$(`//li[@data-target="#customCarousel1" and @class="active"]`)



    

    }
    async clickOnContactUs(){
        await this.$clickContact().click();
    }

    // async ClickingCarousel(){
    //     let count = await this.$$totalIndicators().length;
    //     for(let i=1;i<=count;i++){
    //         await this.$singleIndicator(i).click();
    //     }
    // }
    async clickIndicator(){
        let indicatorCount=await this.$$totalIndicators().length;
        for(let i=1;i<=indicatorCount;i++){
            await this.$indicators(i).click();
        }
    }

}
export default new LandingPageMaven();