import CommonPage from "./commonPage.js";

class Iframe extends CommonPage {

    constructor()
    {
        super()
        this.$ratingSliderOption=()=> $('//h3[text()="Rating Range Slider"]')
    }

    async selectIframeOption()
    {
        await this.$ratingSliderOption().click()
        await this.$sliderHeader().waitForDisplayed({ timeout: 5000 })
    }

    async ()
    {
        
    }
}

export default new Iframe()
