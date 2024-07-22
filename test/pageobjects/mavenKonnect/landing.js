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
    /**
     * To click on the contactus header
     */
    async clickHeader(){
        await this.$contactUsHeader().click();
    }
    /**
     * To click on usericon
     */
    async userIcon(){
        await this.$userIcon().click();
    }
    /**
     * To click on carousel dots
     */
    async carouselDots(){
        for(let i=1;i<=await this.$$carouselDot().length;i++){
            await this.$carouselDots(i).click();
        }
    }

}
export default new Landingpage();