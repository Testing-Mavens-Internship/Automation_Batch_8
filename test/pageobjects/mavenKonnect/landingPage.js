import Common from "./common.js";
class Landingpage extends Common{
    constructor(){
        super();
        this.$mavenkonnectlogo =()=>$(`//a[@class="navbar-brand"]/span`)
        this.$contactusbutton = () => $('(//a[@class="btn1" and normalize-space(text())="Contact Us"])[1]')
    }
    async clickOnContactus(){
        await this.$contactusbutton().click();
    }
}
export default new Landingpage();