import Common from '../playground/common.js';

class Tools extends Common
{
    constructor()
    {
        super()
        this.$toolTipNavigator=()=>$('//a[@href="/components/tooltip"]')
        this.$toolTipButton=()=>$('//button[text()="Hover me"]')
        this.$hoverText=()=>$('//div[text()="Tooltip text here"]')

    }

    /**
     * Navigate to ToolTip component
     */
    async goToTooltip()
    {
        await this.$components().click()
        await this.$toolTipNavigator().click()

    }

    /**
     * Hover over the button
     */
    async hoverCheck()
    {
        const element=await this.$toolTipButton()
        await element.moveTo();
    }
}
export default new Tools()