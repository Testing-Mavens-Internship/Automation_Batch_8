import emojiSlider from "../pageobjects/qaPlayground/emojiSlider.js";

describe('emojiSlider', () => {
    it('load url', async () => {
        await emojiSlider.loadUrl();
        await browser.maximizeWindow();
    })

    it('slide', async () => {;