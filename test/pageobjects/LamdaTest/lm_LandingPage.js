import CommonPage from "./lm_CommonPage.js";
class LandingPage extends CommonPage{

    constructor()
    {
        super();
        this.$hoverMyaccountIcon = () => $('//i[@class="icon fas fa-user"]')
        this.$register = () => $("//span[@class='title' and normalize-space(text())='Register']")

    }


    async clickOnRegister()
    {
        
        this.$hoverMyaccountIcon().moveTo()
        this.$register().click();
    }



}


export default new LandingPage();