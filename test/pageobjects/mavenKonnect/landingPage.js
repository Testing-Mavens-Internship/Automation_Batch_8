import CommonPage from "./commonPage.js";
export class Landingpage extends CommonPage {
    constructor(){
        super();
        this.$contactUs=()=> $(`(//a[@class="btn1"])[1]`);
        this.$userIcon=()=> $(`//i[@class="fa fa-user"]`);
        this.$checkOutHeader=()=> $(`//header[@id="header"]`);
        this.$$carouselDot=()=> $$(`//li[@data-target="#customCarousel1"]`);
        this.$carouselDots=(index)=> $(`//li[@data-target="#customCarousel1"][${index}]`);
        this.$activeCarouselDot=()=>$(`//li[@data-target="#customCarousel1"][@class="active"]`);
    }

    async clickHeader(){
        await this.$contactUs().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
        await this.$contactUs().click();
    }

    async clickUserIcon(){
        await this.$userIcon().waitForDisplayed({timeout: 10000, timeoutMsg: 'Header is not visible'})
        await this.$userIcon().click();
    }

    async clickCarouselDots(){
        let count =await this.$$carouselDot().length
        for(let i=1;i<=count;i++){
            await this.$carouselDots(i).click();
        }
    }

}
export default new Landingpage();