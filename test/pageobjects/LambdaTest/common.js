export default class Common {

    constructor()
    {
        this.$header=()=> $('//img[@alt="Poco Electro"]')
        this.$lname=()=> $('//input[@placeholder="Last Name"]') //register.js, editMyAccountInfo.js
        this.$submitBtn=()=> $('//input[@value="Continue"]')

    }

    async loadUrl()
    {
        await browser.url('https://ecommerce-playground.lambdatest.io/')
        await browser.maximizeWindow()
    }
}
