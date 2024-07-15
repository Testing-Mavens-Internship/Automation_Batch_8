import commonPage from "./commonPage.js";
class LandingPage extends commonPage{
    constructor(){
        super();
        this.$landingpageheader=()=>$(`//h3[text()="Top Trending Categories"]`);
        this.$myacount=()=>$(`//i[@class="icon fas fa-user"]`);
        this.$register=()=>$(`//a[@class="icon-left both dropdown-item"]/div/span[@class="title" and contains(text(), "Register")]`);
    }
    async clickRegister(){
        await this.$myacount().moveTo();
        await this.$register().click();
    }
}export default new  LandingPage();