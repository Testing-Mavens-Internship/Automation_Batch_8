import CommonPage from "./commonPage.js";

class RatingRangeSlider extends CommonPage {

    constructor()
    {
        super()
        this.$ratingSliderOption=()=> $('//h3[text()="Rating Range Slider"]')
        this.$sliderHeader=()=> $('//div[@class="text-sm"]')
        this.$slideBar=()=> $('//input[@type="range"]')
        this.$feedbackBtn=()=> $('//button[@id="feedback"]')
    }

    async selectRatingSliderOption()
    {
        await this.$ratingSliderOption().click()
        await this.$sliderHeader().waitForDisplayed({ timeout: 5000 })
    }

    async slide()
    {
        // const slider = await $('//input[@type="range"]')
        // //const sliderLocation = await slider.getLocation()
        // //const sliderSize = await slider.getSize()
        // const targetValue = 20
        // //const maxValue = 100
        // //const offset = (sliderSize.width / maxValue) * targetValue
        // await slider.dragAndDrop({ x: targetValue, y: 0 }, { duration: 1000 })
        // await browser.pause(1000)

        await this.$slideBar().click();
        await this.$slideBar().setValue(40);
        await this.$feedbackBtn().waitForDisplayed({timeout : 5000})
    }
}

export default new RatingRangeSlider()
