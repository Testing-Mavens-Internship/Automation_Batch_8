class SliderFeedback {
    constructor() {
        this.$sliderThumb = () => $(`//div[@class="thumb"]`);
        this.$feedbackButton = () => $(`//button[@id="feedback"]`);
        this.$thankYouMessage = () => $('#ty-msg');
        this.$rateSlider = () => $(`//h3[text()="Rating Range Slider"]`);
        this.$progressBar = () => $('.progress-bar');
        this.$ratingBar = () => $('//input[@type="range"]')
        this.$feedbackButton = () => $('//button[@id="feedback"]')
        this.$emoji = () => $('//ul[@class="emojis"]')
        this.$backPageOption = () => $('//*[local-name()="svg" and @viewBox="0 0 512 512"]')
    }

    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url("https://qaplayground.dev");
        await this.$rateSlider().scrollIntoView();
        await this.$rateSlider().waitForDisplayed({ timeout: 5000 });
        await this.$rateSlider().click();
    }

    async moveSliderAndSendFeedback() {
        // const sliderThumb = await this.$sliderThumb();
        // const sliderWidth = await sliderThumb.getSize('width');
        // const moveToPosition = Math.floor(sliderWidth * 0.42); 

        // console.log(`Moving slider to position: ${moveToPosition}`);

        // await sliderThumb.dragAndDrop({ x: moveToPosition, y: 0 });

        // const feedbackButton = await this.$feedbackButton();
        // await feedbackButton.waitForDisplayed({ timeout: 10000 });
        // await feedbackButton.waitForEnabled({ timeout: 10000 });

            await this.$ratingBar().click();
            await this.$ratingBar().setValue(40);


        console.log("Feedback button is now enabled and displayed.");

        await this.$feedbackButton().click();

        const thankYouMessage = await this.$thankYouMessage();
        await expect(thankYouMessage).toBeDisplayed();
        await expect(thankYouMessage).toHaveText('Thank you for your feedback!');
    }
}

export default new SliderFeedback();
