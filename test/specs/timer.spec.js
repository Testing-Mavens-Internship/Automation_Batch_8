import timer from "../pageobjects/timer.js"
const targetValue = 75;
describe(`A loader should end at the value 75%`,()=>{
    it(`loading url`,async()=>{
        await timer.loadUrl();
        // (await timer.$homepageHeader()).waitForDisplayed({timeout:5000,timeoutMsg:"Webpage is not loaded."})
    })
    it('click on start button', async ()=>{
        await timer.clickStartButton();
        await timer.waitForProgressBarToReach(targetValue);
        let res=await(await timer.$result()).getText()
        expect(res).toMatch(/^Result: 0/);
    })
})