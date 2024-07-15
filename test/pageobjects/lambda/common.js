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
}