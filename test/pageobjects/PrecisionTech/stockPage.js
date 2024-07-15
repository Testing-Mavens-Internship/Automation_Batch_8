class StockPage {

    constructor()
    {
        this.$stockHeader=()=> $('//strong[text()="STOCK PROFILING AND ANALYSIS SERVICES"]')
        this.$enquiry=()=> $('//a[normalize-space()="MAKE AN ENQUIRY"]')
        this.$accept=()=> $('//button[text()="Accept"]')
    }

    async clickOnEnquiry()
    {
        await this.$accept().click()
        await this.$enquiry().waitForDisplayed({timeout:5000})
        await this.$enquiry().click()
    }
}

export default new StockPage()
