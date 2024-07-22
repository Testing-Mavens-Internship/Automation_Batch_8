import sortList from '../pageobjects/qaPlaground/homePage.js';
import homePage from '../pageobjects/qaPlaground/homePage.js';
import slider from '../pageobjects/qaPlaground/slider.js';
import redirect from '../pageobjects/qaPlaground/redirect.js';
 
describe(`Exploring different actions in QA Playground webpage.`,()=>{
    it(`Loading url of the sortable list `,async()=>{
        await sortList.loadUrl();
        expect(await sortList.$header().isDisplayed())
            .withContext('Qa playground is not loaded')
            .toBeTrue();
    })
   
    it('should click on redirect chain', async ()=>{
        await homePage.clickRedirect();
        expect(await redirect.$start().isDisplayed())
            .withContext('Redirect page is not loaded')
            .toBeTrue();

    })

    it('Should click on start button for page redirecting', async ()=>{
        await redirect.clickStart();
        expect(await redirect.$slidervalidater().isDisplayed()).toBeTrue()
        await browser.pause(5000)
    })

    it('Should click on slider', async ()=>{
        await homePage.clickSlider();
        expect(slider.$sliderHeader().isDisplayed())
            .withContext('Slider header is displayed')
            .toBeTrue();
    })

    it('Should validate slider', async ()=>{
        await slider.slide();
    })
    
     
    
})