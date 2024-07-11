import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super()
        this.$dashheader=()=>$(`//div[text()="PlayGround"]`)
        this.$dashdrpdwn=()=>$(`//div[@class="flex items-center cursor-pointer space-x-2"]/*[local-name()='svg'][2]`)
        this.$dashoptn=()=>$(`//li[contains(text(),"Log Out")]`)
        this.$categoryslct=()=>$(`//p[text()="Shop by Category"]`)
        this.$categoryopt=()=>$(`//li[text()="Mobiles"]`)
        this.$shopHeader=()=>$(`//h1[text()="Products"]`);
    }
    async check()
    {  
       await this.$dashdrpdwn().click()
       await this.$dashoptn().waitForDisplayed({timeout:5000,timeoutMsg:"Logout is present"})
    }
    async categoryclk()
    {
        await this.$categoryslct().click();
        await this.$categoryopt().isDisplayed();
        await this.$categoryopt().click();
    }
}

export default new HomePage();