import pgcommon from "./commonPG.js";
class home extends pgcommon
{
    constructor()
    {
        super();
        this.$homeheader=()=>$('//div[text()="PlayGround"]');
        this.$homedrpdwn=()=>$('//*[local-name()="svg" and @viewBox="0 0 320 512"]');
        this.$homeloginclk=()=>$('//li[contains(text(),"Login")]');
    }
    async homeclk()
    {
        await this.$homeheader().waitForDisplayed({timeout:5000});
        await this.$homedrpdwn().click();
        await this.$homeloginclk().click()
    }
}
export default new home();