import homepage from "../../pageobjects/SelectorsHub/homepage.js";
describe('Enterng all the details on the page.', () => {
    it('Loading Url', async () => { 
        await homepage.loadUrl();
        await homepage.$homepageHeader().waitForDisplayed({timeout:5000,timeoutMsg:"homepage is not loaded."});
        expect(await homepage.$homepageHeader())
        .toBeDisplayed();
    })

    it('Entering values to the fields.', async () => { 
        await homepage.enteringFields();
    })

    it('Entering values to the disabled fields.', async () => { 
        await homepage.enteringDisabledFields();
    })

    it('Clicking on the checkout button and switching the window', async () => { 
        await homepage.switchingWindow();
        await homepage.$homepageHeader().waitForDisplayed({timeout:5000,timeoutMsg:"homepage is not loaded."});
        expect(await homepage.$homepageHeader())
        .toBeDisplayed();
    })

    it('Choosing the Car.', async () => { 
        await homepage.selectingCar();
    })
    
    it('Download the file.', async () => { 
        await homepage.Download();
    })

    it('Uploading the file.', async () => { 
        await homepage.uploadFile();
    })

    it('scrolling to iframe.', async () => { 
        await homepage.scroll();
    })

    it('switching to the iframe', async () => { 
        await homepage.controlIframe();
        await homepage.$iframeHeader().waitForDisplayed({
            timeout:5000,
            timeoutMsg:"switching to iframe is not working"
        });
        expect(await homepage.$iframeHeader())
            .toBeDisabled();
    })
})
