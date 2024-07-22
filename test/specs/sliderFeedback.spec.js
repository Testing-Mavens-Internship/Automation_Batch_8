import sliderFeedback from '../pageobjects/rateSlider/sliderFeedback.js';

describe('Feedback Slider Test', () => {
    it('should launch the URL', async () => {
        await sliderFeedback.loadUrl();
    });

    it('should move the slider, enable the feedback button, and validate the thank you message', async () => {
        await sliderFeedback.moveSliderAndSendFeedback();
    });
});
