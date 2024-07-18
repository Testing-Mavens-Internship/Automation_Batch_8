export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//img[@src="https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg"]')
        this.$cart=()=> $('//a[@href="https://magento.softwaretestingboard.com/checkout/cart/"]')
    }

    async loadUrl()
    {
        await browser.url('https://magento.softwaretestingboard.com/')
        await browser.maximizeWindow()
    }
}
