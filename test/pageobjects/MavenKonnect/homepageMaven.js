import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$homepageContactUsHeader=()=>$(`(//a[@class="btn1" and normalize-space(text())="Contact Us"])[1]`);
        this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`)
        this.$indicators=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        this.$activeIndicator=()=>$(`//li[@data-target="#customCarousel1" and @class="active"]`)
        this.$userIcon=()=>$(`//i[@class="fa fa-user"]`);

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
        await this.$userIcon().click();
    }
}
export default new HomePage()