import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$ContactUs=()=>$(`(//a[@class="btn1" and normalize-space(text())="Contact Us"])[1]`);
        this.$logoHeader=()=>$(`//span[contains(text(),"MavenKonnect")]`);
        this.$usericon=()=>$(`//i[@class="fa fa-user"]`);
    }
    async clickOnContactUS(){
        await this.$ContactUs().click();
    }
    async clickOnUserIcon(){
        await this.$usericon().click();
    }
}
export default new HomePage();