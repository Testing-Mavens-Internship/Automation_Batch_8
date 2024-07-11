import commonpage from "./commonPages.js";
class cntct extends commonpage
{
    constructor()
    {
        super()
        this.$cartsmbl=()=>$('//*[local-name()="svg" and @viewBox="0 0 40 40"]');
    }
    async cartclk()
    {
        await this.$cartsmbl().click();
    }
}
export default new cntct();