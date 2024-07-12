import CommonPage from "./commonPage.js";

class HomePage extends CommonPage{
    constructor(){
        super();
        this.$header=()=>$('//div[text()="New Arrivals"]');
        this.$user=()=>$(`//*[local-name()='svg'][@viewBox="0 0 320 512"]`);
        this.$logout=()=>$('//li[text()="Log Out"]')
        this.$shop=()=>$('//p[text()="Shop by Category"]')
        this.$clickMobile=()=>$('//following::li[text()="Mobiles"]')
       
    }

     async clickUser(){
await this.$user().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
        await this.$user().click();
    }
    async clickShopCategory(){
await this.$shop().waitForDisplayed({timeout:30000,timeoutMsg:"Not displayed"})
        await this.$shop().click();
    }
    async clickMobile(){
        await this.$clickMobile().waitForDisplayed({timeout:30000,timeoutMsg:"not displayed"});
        (await this.$clickMobile()).click();
    }
}
export default new HomePage();
