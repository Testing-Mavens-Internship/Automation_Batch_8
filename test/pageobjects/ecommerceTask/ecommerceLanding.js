import Common from "./ecommerceCommon.js";
class Landing extends Common
{
    constructor()
    {
        super()
        this.$landingpageheader=()=>$('(//*[local-name()="svg" and @viewBox="0 0 32 32"])[1]')
        this.$categorybutton=()=>$('//a[@aria-label="Categories"]')
        this.$headerdisplayed=()=>$
    }
}
export default new Landing()