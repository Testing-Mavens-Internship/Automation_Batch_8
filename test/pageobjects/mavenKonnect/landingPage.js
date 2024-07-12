import basePage from "./commonPage.js";

class landingPage extends basePage {
    constructor() {
        super();
        this.$header=()=>$(`//span[normalize-space()="MavenKonnect"]`)
        this.$contactUs=()=> $('(//a[@class="btn1" and normalize-space(text())="Contact Us"])[1]')
        this.$userButton=()=>$(`//i[@class="fa fa-user"]`) 
        this.$$totalIndicators=()=>$$(`//li[@data-target="#customCarousel1"]`)
        this.$indicators=(index)=>$(`(//li[@data-target="#customCarousel1"])[${index}]`)
        this.$activeIndicator=()=>$(`//li[@data-target="#customCarousel1" and @class="active"]`)

    }

    async clickContactUs() {
        await this.$contactUs().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
        await this.$contactUs().click();

    }

    async clickUser() {
        await this.$userButton().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
        await this.$userButton().click();
    }

    async clickIndicator(){
        let indicatorCount=await this.$$totalIndicators().length;
        for(let i=1;i<=indicatorCount;i++){
            await this.$indicators(i).click();
        }
    }
   

}
export default new landingPage()