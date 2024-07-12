import Common from "./common.js";
class HomePageMaven extends Common{
    constructor(){
        super();
        this.$homepageContactUsHeader=()=>$('(//div[@id="customCarousel1"]//a[normalize-space()="Contact Us"])[1]');
        this.$homepageUserIcon=()=>$(`//div[@class="user_option-box"]//i[@class="fa fa-user"]`);
        this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`);
        this.$indicators=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`);
        this.$activeIndicator=()=>$(`//li[@data-target="#customCarousel1" and @class="active"]`);
    }
    async contactButtonClick(){
        await this.$homepageContactUsHeader().click();
    }
    async clickIndicator(){
        let indicatorCount=await this.$$totalIndicators().length;
        for(let i=1;i<=indicatorCount;i++){
            await this.$indicators(i).click();
        }
    }
    async clickUserIcon(){
        await this.$homepageUserIcon().click();
    }
}
export default new HomePageMaven()