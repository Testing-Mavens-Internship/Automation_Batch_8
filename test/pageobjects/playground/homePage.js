import Common from '../playground/common.js';
class Home extends Common
{
    constructor()
    {
        super()
        
        this.$home=()=>$('//a[text()="Home"]')
        this.$componentsHeader=()=>$('//h1[text()="Explore Components"]')
        this.$shadowText=()=>$('//h2[text()="Shadow DOM Component"]')
        this.$popupLearnmore=()=>$('//a[@href="/components/pop-window"]')
        this.$popupButton=()=>$('//button[text()="Open Pop Window"]')
        this.$popupHeader=()=>$('//h2[text()="Pop Window Content"]')
        this.$popupClose=()=>$('//button[text()="Close"]')
    }

    /**
     * Navigate to components
     */
    async componentsNavigate()
    {
        await this.$components().click()
        await this.$shadowText().waitForDisplayed({timeout:5000,timeoutMsg:"Header not found"})
    }

    /**
     * Click on learn link for pop up
     */
    async popupLearn()
    {
        await this.$popupLearnmore().click()
    }

    /**
     * Pop button click
     */
    async popupOpen()
    {
        await this.$popupButton().click()
    }

    /**
     * Close popup and navigate back to component
     */
    async popupClose()
    {
        await this.$popupClose().click()
        await this.$components().click()
        await this.$shadowText().waitForDisplayed({timeout:5000,timeoutMsg:"Header not found"})
    }
}
export default new Home()