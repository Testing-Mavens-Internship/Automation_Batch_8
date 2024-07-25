export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//img[@src="../images/logo-topbar.svg"]')
    }

    /**
     * Method to launch the url
     */
    async loadUrl()
    {
        await browser.url('https://petstore.octoperf.com/actions/Catalog.action')
        await browser.maximizeWindow()
    }

    /**
     * Method to reach homepage
     */
    async homePage()
    {
        await this.$header().click()
    }
}
