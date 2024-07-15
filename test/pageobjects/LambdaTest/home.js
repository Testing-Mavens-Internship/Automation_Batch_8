class Home {

    constructor()
    {
        this.$homeHeader=()=> $('//h3[text()="Top Trending Categories"]')
        this.$firstOne=()=> $('(//div[@class="figure-img-wrapper"])[1]')
    }

    async clickFirstOption()
    {
        await this.$firstOne().click()
    }
}

export default new Home()