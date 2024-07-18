import startStop from "../pageobjects/startStop.js";

describe('To verify the workflow of Progressbar in PlayGround website', () => {

    it('Launch URL in browser', async () => {
        await startStop.loadUrl()
        expect(await startStop.$header()
        .isDisplayed()).withContext('Expect header to be displayed')
        .toBeTrue()
    })

    it('Click Start button', async () => {
        await startStop.progressBarValidation()
        // expect(await startStop.$result()
        // .isDisplayed()).withContext('Expect slider value 75% to be displayed')
        // .toBeTrue()
    })

})
