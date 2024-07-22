import CommonPage from "./commonPage.js"

class ToolTip extends CommonPage{
    constructor()
    {
        super()
        this.$hover=()=>$(`//button[text()='Hover me']`)
        this.$tooltiptext=()=>$(`//div[text()='Tooltip text here']`)
    }
    /**
     * validating hover message
     */
    async tooltipFunction()
    {
        await this.$hover().moveTo()
    }
}
export default new ToolTip()