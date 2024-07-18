import Common from "./common.js";
import components from "./components.js";

class ToolTip extends Common
{
    constructor()
    {
        super()
        this.$learnmore=()=>$(`//h2[text()='Tooltip Component']/parent::div/p/following::a[1]`)
        this.$hover=()=>$(`//button[text()='Hover me']`)
        this.$tooltiptext=()=>$(`//div[text()='Tooltip text here']`)
    }

    /**
     * Hover over tooltip button to view the tooltip text
     */
    async tooltipFunction()
    {
        await components.$component().click()
        await this.$learnmore().waitForDisplayed({timeout:8000})
        await this.$learnmore().click()
        await this.$hover().moveTo()
    }
}
export default new ToolTip()