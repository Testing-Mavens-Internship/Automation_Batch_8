import progress from '../pageobjects/progress.js';

const targetValue = 75;

describe('Should load progress page', ()=>{
    it('Should load url', async ()=>{
        await progress.loadUrl();

    })

    it('click on start button', async ()=>{
        await progress.clickStartButton();
        await progress.waitForProgressBarToReach(targetValue);
    })
    

})