import Common from "./playgroundCommon.js";

class Home extends Common
{
    constructor()
    {
        super()
        
        this.$home=()=>$('//a[text()="Home"]')
        
        this.$componentsheader=()=>$('//h1[text()="Explore Components"]')
        this.$shadowtext=()=>$('//h2[text()="Shadow DOM Component"]')
        this.$popuplearnmore=()=>$('//a[@href="/components/pop-window"]')
        this.$popupbutton=()=>$('//button[text()="Open Pop Window"]')
        this.$popupheader=()=>$('//h2[text()="Pop Window Content"]')
        this.$popupclose=()=>$('//button[text()="Close"]')
    }

    /**
     * Navigate to components
     */
    async componentsnavigate()
    {
        await this.$components().click()
        await this.$shadowtext().waitForDisplayed({timeout:5000,timeoutMsg:"Header not found"})
    }

    /**
     * Click on learn link for pop up
     */
    async popuplearn()
    {
        await this.$popuplearnmore().click()
    }

    /**
     * Pop button click
     */
    async popupopen()
    {
        await this.$popupbutton().click()
    }

    /**
     * Close popup and navigate back to component
     */
    async popupclose()
    {
        await this.$popupclose().click()
        await this.$components().click()
        await this.$shadowtext().waitForDisplayed({timeout:5000,timeoutMsg:"Header not found"})
    }
}
export default new Home()