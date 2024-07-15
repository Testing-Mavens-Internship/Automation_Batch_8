export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//img[@src="//precisiontech.uk/cdn/shop/files/llogo.jpg?v=1718874430&width=600"]')
    }

    async loadUrl()
    {
        await browser.url('https://precisiontech.uk/')
        await browser.maximizeWindow()
    }
}
