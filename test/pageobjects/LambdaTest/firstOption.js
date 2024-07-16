class FirstOption {

    constructor()
    {
        this.$filter=()=> $('//h3[text()="Filter"]') //header
        this.$min=()=> $('(//input[@placeholder="Minimum Price"])[2]')
        this.$max=()=> $('(//input[@placeholder="Maximum Price"])[2]')
        //this.$sortBy=()=> $('//select[@id="input-sort-212403"]')
        this.$lowToHigh=()=> $('(//option[text()="Price (Low > High)"])[1]')
        this.$$priceCount=()=> $('//span[@class="price-new"]')
        this.$exactPrice=(index)=> $('//span[@class="price-new"][${index}]')
        this.$sortByOption=()=> $('//select[@id="input-sort-212403"]')
        this.$clearPrice=()=> $(`(//a[@class="mz-filter-reset"]/i[@class="fas fa-times"])[2]`)
        this.$minPriceReset=()=> $('(//input[@min="98"])[2]')
        this.$maxPriceReset=()=> $('(//input[@max="2000"])[2]')
        this.$inStockBox=()=> $('(//label[text()="In stock"])[2]')
        this.$appleOption=()=> $('//label/img[@alt="Apple"]')
        this.$sortAtoZ=()=> $('(//option[text()="Name (A - Z)"])[1]')
        this.$appleFirstOption=()=> $('(//div[@class="carousel-item active"])[1]')
        //this.$hoverMenu=()=> $('')
        this.$shoppingCart=()=> $('//*[@id="entry_212408"]/div/div[1]/div/div[1]/div[2]/button[1]/i')
        //this.$sizeDropdown=()=> $('//select[@id="input-option231-212958"]')
        //this.$mediumSize=()=> $('//option[@value="35"]')
        //this.$popUp=()=> $('//*[@id="notification-box-top"]/div/div[2]/div[1]/p/text()[1]')
        this.$goToCartBtn=()=> $('//*[@id="notification-box-top"]/div/div[2]/div[2]/div[1]/a')
        this.$checkout=()=> $('//*[@id="notification-box-top"]/div/div[2]/div[2]/div[2]/a')
        //this.$cart=()=> $('//div[@class="cart-icon"]')
        //this.$checkoutBtn=()=> $('//a[text()=" Checkout"]')
        
    }

    async setPrice()
    {
        await this.$min().setValue("1008")
        await this.$max().setValue("20000")
    }

    async sortPrice()
    {
        await this.$sortByOption().waitForClickable({timeout:5000})
        await this.$sortByOption().click()
        await this.$lowToHigh().click()
        let prices = []
        let priceElements = await this.$$priceCount().length
        for(let i=1;i<=await this.$$priceCount().length;i++)
        {
            let price= await this.$exactPrice(i).getText()
            let removeDollar = price.replace('$', '')
            let pricee= parseFloat(removeDollar)
            prices.push(prices)
        }
        return prices
    }

    async resetPrice()
    {
        await this.$clearPrice().click()
        await browser.pause(5000)
    }

    async availabilityInStock()
    {
        await this.$inStockBox().click()
        await this.$appleOption().click()
        await browser.pause(4000)
    }

    async sortAppleProd()
    {
        await this.$sortByOption().click()
        await this.$sortAtoZ().click()
        await browser.pause(4000)
        //validate items displayed based on sort order
    }

    async hoverAppleFirstProd()
    {
        await this.$appleFirstOption().moveTo()
        await browser.pause(4000)
    }

    async clickShoppingCart()
    {
        /*await this.$shoppingCart().click()
        await this.$sizeDropdown().click()
        await this.$mediumSize().click()
        await this.$addToCartBtn().click()
        await this.$cart().click()
        //validate the product in cart is same
        await this.$checkoutBtn().click()*/

    }

}

export default new FirstOption()
