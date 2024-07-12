import Common from "../mavenKonnect/common.js";

export class Landingpage extends Common {
    constructor(){
        super();
        this.$contactUsHeader=()=> $(`(//a[@class="btn1"])[1]`);
        this.$userIcon=()=> $(`//i[@class="fa fa-user"]`);
        this.$checkOutHeader=()=> $(`//header[@id="header"]`);
        this.$$carouselDot=()=> $$(`//li[@data-target="#customCarousel1"]`);
        this.$carouselDots=(index)=> $(`//li[@data-target="#customCarousel1"][${index}]`);
        this.$activeCarouselDot=()=>$(`//li[@data-target="#customCarousel1"][@class="active"]`);
    }

    async clickHeader(){
        await this.$contactUsHeader().click();
    }

    async userIcon(){
        await this.$userIcon().click();
    }

    async carouselDots(){
        for(let i=1;i<=await this.$$carouselDot().length;i++){
            await this.$carouselDots(i).click();
        }
    }

}
export default new Landingpage();