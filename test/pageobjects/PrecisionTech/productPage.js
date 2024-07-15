class ProductPage {

    constructor()
    {
        this.$productHeader=()=> $('//h1[@class="collection-hero__title"]')
        this.$sort=()=> $('//h2/label[text()="Sort by:"]')
        this.$zToA=()=> $('(//option[normalize-space()="Alphabetically, Z-A"])[1]')
        this.$$products=()=> $$('//h3[@class="card__heading h5"]/a')
    }

    async sortProd()
    {
        await this.$sort().click()
        await this.$zToA().click()

        // let dropdownItems=[]
        // let items=await this.$$dropdownValues()
        // for(let item of items)
        // {
        //     await item.waitForDisplayed({timeout:5000})
        //     dropdownItems.push(await item.getText())
        // }
        // return dropdownItems

    }
}

export default new ProductPage()
