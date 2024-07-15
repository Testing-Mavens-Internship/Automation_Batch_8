class ContactPage {

    constructor()
    {
        this.$contactHeader=()=> $('//strong[text()="CONTACT US"]')
        this.$cart=()=> $('//*[local-name()="svg" and @viewBox="0 0 40 40"]')
    }

    async cartClick()
    {
        await this.$cart().click()
    }

}

export default new ContactPage()
