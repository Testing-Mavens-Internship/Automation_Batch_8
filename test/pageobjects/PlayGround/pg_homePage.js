class HomePage {

    constructor()
    {
        //super()
        this.$shopTab=()=> $('//a[text()="Shop"]')
    }

    async shopTab()
    {
        await this.$shopTab().click()
    }

}

export default new HomePage()
