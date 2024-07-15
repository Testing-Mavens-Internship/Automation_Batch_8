import CommmonLambda from "./common_lambda.js";
class HomePageLambda extends CommmonLambda{
    constructor(){
        super()
        this.$clickOnHome=()=>$(`//span[normalize-space()="Home"]`)
        this.$clickOnproduct=()=>$(`//div[@class="swiper-slide swiper-slide-active"]/a`)
        this.$header=()=>$(`//div[@id="entry_217821"]//a/img`)
        this.$orderHistory=()=>$(`(//a[@class="list-group-item"])[6]`)
        this.$eyeIcon=()=>$(`//a[@class="btn btn-info"]`)
        this.$Continue=()=>$(`//a[@class="btn btn-primary"]`)
        this.$myaccount=()=>$(`//li[@class="nav-item dropdown dropdown-hoverable"]/a/i`)
        this.$logOut=()=>$(`(//a[@class="list-group-item"])[13]`)

    }
    async ClickOnHomeLink(){
        await this.$clickOnHome().click();
    }
    async clickOnFirstProduct(){
        await this.$clickOnproduct().click()
    }
    async clickOnMyOrder(){
        await this.$myaccount().click()
        await this.$orderHistory().click();
        await this.$eyeIcon().click();
        await this.$Continue().click();

    }

    async logOut(){
        await this.$logOut().click();
    }
    


    
}
export default new HomePageLambda();