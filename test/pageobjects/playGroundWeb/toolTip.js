import Common from "./playgroundCommon.js";
 
class Tools extends Common
{
    constructor()
    {
        super()
        this.$tooltipnavigator=()=>$('//a[@href="/components/tooltip"]')
        this.$tooltipbutton=()=>$('//button[text()="Hover me"]')
        this.$hovertext=()=>$('//div[text()="Tooltip text here"]')
 
    }
 
    /**
     * Navigate to ToolTip component
     */
    async gototooltip()
    {
        await this.$components().click()
        await this.$tooltipnavigator().click()
 
    }
 
    /**
     * Hover over the button
     */
    async hovercheck()
    {
        const element=await this.$tooltipbutton()
        await element.moveTo();
    }
}
export default new Tools()