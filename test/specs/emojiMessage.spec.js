import slider from "../pageobjects/qaPlayground/emojiMessege.js";

describe('emojiMessege', () => {
    it('load url',async()=>{
        await slider.loadUrl();
    })
 
    it('slide',async()=>{
        await slider.setRange()
    })
 
    it('feedback',async()=>{
        await slider.clickFeedback()
    })
})