import pgcommon from "./commonPG.js";
class dashboard extends pgcommon
{
    constructor()
    {
        super()
        this.$dashheader=()=>$('//div[text()="PlayGround"]')
        this.$dashdrpdwn=()=>$('//div[contains(@class,"flex")]/*[local-name()="svg" and @viewBox="0 0 448 512"]')
        this.$logoutOptn=()=>$('//li[contains(text(),"Log Out")]')
        this.$wishlistIcon = () => $(`(//*[local-name()="svg" and @viewBox="0 0 16 16"])[1]`)
        this.$categoryslct=()=>$('//p[text()="Shop by Category"]')
        this.$categoryopt=()=>$('//li[text()="Mobiles"]')
        this.$nxt=()=>$('//label')
    }
    async check()
    {   
        // await this.$dashheader().scrollIntoView();
        // await this.$dashheader().waitForDisplayed({timeout:5000})
        await this.$wishlistIcon().waitForDisplayed({timeout:5000});
        await this.$dashdrpdwn().waitForClickable({timeout:6000})
        await this.$dashdrpdwn().click()
        
    }
    async categoryclk()
    {
        await this.$categoryslct().waitForDisplayed({timeout:7000})
        await this.$categoryslct().click();
        await this.$categoryopt().waitForDisplayed({timeout:5000})
        await this.$categoryopt().click();
    }
}
export default new dashboard();