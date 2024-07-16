import Homepage from "../../pageobjects/demoAutomation/Homepage.js"

describe('End to End flow of demo Automation site for the given flow.', () => {
    const randomInt =Math.floor(Math.random()*1000);
        let mail=(`Solomon${randomInt}@gmail.com`);
    it('Navigate to url of the webpage', async () => {
        await Homepage.loadUrl();
        await Homepage.$logo().waitForDisplayed({timeout:4000,timeoutMsg:"The webpage is not loading."});
        expect(await Homepage.$logo().isDisplayed()).toBeTrue();
    })

    it('Enter the details and signup to the webpage', async () => {
        await Homepage.login(mail);
        await Homepage.$homepageHeader().waitForDisplayed({timeout:4000,timeoutMsg:"Homepage is not loading."});
        expect(await Homepage.$homepageHeader().isDisplayed()).toBeTrue();
    })

    it('Enter the credentials', async () => {
        await Homepage.enteringValues(mail);
    });

    it('Upload File', async () => {
        await Homepage.uploadFile();
    })


})