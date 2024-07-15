export default class{
    constructor(){

    }
    async launchUrl() {
        await browser.maximizeWindow();
        await browser.url('https://ecommerce-playground.lambdatest.io/')
    }

}