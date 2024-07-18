import Common from "./common.js";

class Popwindow extends Common
{
    constructor()
    {
        super()
        this.$learnmore=()=>$(`//h2[text()='Pop Window Component']/parent::div/p/following::a[1]`)
        this.$popbutton=()=>$(`//button[text()='Open Pop Window']`)
        this.$popupcontent=()=>$(`//p[text()='This is the content of the Pop Window. You can put any content here.']`)
        this.$close=()=>$(`//button[text()='Close']`)
    }
    
    /**
     * Click on popup button to open the popup
     */
    async popupFunction()
    {
        await this.$learnmore().click()
        await this.$popbutton().click()
    }

    /**
     * Close the popup window
     */
    async closePopup()
    {
        await this.$close().click()
    }
}
export default new Popwindow()