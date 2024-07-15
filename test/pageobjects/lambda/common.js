export default class Common{
    constructor() {
    }
    /*
    Function to launch the URL in the browser
    */
    async launchUrl() {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        await browser.maximizeWindow();
    }

    async generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 15);
        return `${randomString}@example.com`;
    }


}