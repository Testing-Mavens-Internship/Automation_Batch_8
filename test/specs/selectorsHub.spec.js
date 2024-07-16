import homePage from "../pageobjects/selectorsHub/homePage.js"

describe('end to end flow of selectorsHub',()=>{
    it('Launch url',async()=>{
        await homePage.loadUrl();
        expect (await homePage.$pageHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
       
    })

    it('enter the details',async()=>{
        await homePage.enterDetails('sia1@gmail.com','hello123','mavens',5678989087,'aish');
        expect (await homePage.$pageHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
        
    })
    it('select checkout and car',async()=>{
        await homePage.checkOut();
        expect (await homePage.$pageHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
        
    })

    it('Upload a file',async()=>{
        await homePage.uploadFile();
        expect (await homePage.$pageHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
       
    })

    it('Download the file',async()=>{
        await homePage.download();
        expect (await homePage.$pageHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue();
        
    })

    it('Swicth to next Frame',async()=>{
        await homePage.accessIFrame();
       expect (await homePage.$frameHeader().isDisplayed())
       .withContext('header is displayed')
       .toBeTrue();
    })

    it('switch to parent frame',async()=>{
        await homePage.parentFrame();
        expect (await homePage.$pageHeader().isDisplayed())
        .withContext('Header is displayed')
        .toBeTrue(); 
    })
})