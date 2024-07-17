import homePage from "../pageobjects/akbarTravels/homePage.js";
import holidayPage from "../pageobjects/akbarTravels/holidayPage.js";
import foodPage from "../pageobjects/akbarTravels/foodPage.js";
import detailsPage from "../pageobjects/akbarTravels/detailsPage.js";

let name='emily';
let email=await detailsPage.randomEmail();
let number=7867898989;

describe('Downloading food package from akbar',()=>{

    it('Launch the Url',async()=>{
        await homePage.loadUrl();
        expect (await homePage.$homeHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Click on the "Holiday" category in the navigation bar',async()=>{
        await homePage.clickHoliday();
            const handles = await browser.getWindowHandles();
            await browser.switchToWindow(handles[1]);
            await browser.pause(2000);
            expect (await holidayPage.$holidayHeader().isDisplayed())
            .withContext('Header is displayed')
            .toBeTrue();
    })

    it('Select "All destination" option under browse by experience',async()=>{
        await holidayPage.clickAllDestination();
        expect (await holidayPage.$food().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Click on food option',async()=>{
        await holidayPage.clickFood();
        expect (await foodPage.$foodHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();

    }) 

    it('select akbar recommended and family with kids option',async()=>{
        await foodPage.selectRecommend();
        expect (await foodPage.$sortHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
    })

    it('Click on view details for any package',async()=>{
        
        let name= await foodPage.viewDetails()
        let header=await detailsPage.$detailsHeader().getText()
        expect(name).toEqual(header);
        
    })

    it('Click download option for the package',async()=>{
        await detailsPage.clickDownload();
        expect (await detailsPage.$downloadHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();

    })

    it('enter details for downloading',async()=>{
        await detailsPage.enterDetails(name,email,number);
        expect (await detailsPage.$submit().isClickable())
        .withContext('button is clickable')
        .toBeTrue();
    })

    it('click submit',async()=>{
        await detailsPage.clickSubmit();
        await browser.pause(10000);
        expect (await detailsPage.$downloadSuccess().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue()

    })


})