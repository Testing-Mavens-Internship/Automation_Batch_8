class FirstOption {

    constructor()
    {
        this.$filter=()=> $('//h3[text()="Filter"]') //header
        this.$min=()=> $('(//input[@placeholder="Minimum Price"])[2]')
        this.$max=()=> $('(//input[@placeholder="Maximum Price"])[2]')
        this.$sortBy=()=> $('//select[@id="input-sort-212403"]')
        this.$lowToHigh=()=> $('(//option[text()="Price (Low > High)"])[1]')
        this.$clearPrice=()=> $('//a[@class="mz-filter-reset"]/i[@class="fas fa-times"]')
        this.$priceReset=()=> $('(//input[@min="98"])[2]')
        this.$inStockBox=()=> $('')
        this.$appleOption=()=> $('//label/img[@alt="Apple"]')
        this.$sortAtoZ=()=> $('(//option[text()="Name (A - Z)"])[1]')
        this.$appleFirstOption=()=> $('(//div[@class="carousel-item active"])[1]')
        this.$hoverMenu=()=> $('')
        this.$shoppingCart=()=> $('//*[@id="entry_212408"]/div/div[1]/div/div[1]/div[2]/button[1]/i')
        this.$sizeDropdown=()=> $('//select[@id="input-option231-212958"]')
        this.$mediumSize=()=> $('//option[@value="35"]')
        this.$addToCartBtn=()=> $('//button[text()="Add to Cart"]')
        this.$popUp=()=> $('//*[@id="notification-box-top"]')
        this.$cart=()=> $('//div[@class="cart-icon"]')
        this.$checkoutBtn=()=> $('//a[text()=" Checkout"]')

    }
    /**
     * Set price 1008 and 20000
     */
    async setPrice()
    {
        //await this.$min().clearValue()
        await this.$min().setValue("1008")
        await this.$max().setValue("20000")
    }

    async sort1()
    {
        await this.$sortBy().click()
        await this.$lowToHigh().click()
        //fetch sorted prices and validate items are displayed in correct order
        //array, loop
    }

    async resetPrice()
    {
        await this.$clearPrice().click()
    }

    async availabilityInStock()
    {
        await this.$inStockBox().click()
        await this.$appleOption().click()
    }

    async sort2()
    {
        await this.$sortBy().click()
        await this.$sortAtoZ().click()
        //validate items displayed based on sort order
    }

    async hoverAppleFirstProduct()
    {
        await browser.elementHover('(//div[@class="carousel-item active"])[1]')
        //validate hover menu
    }

    async clickShoppingCart()
    {
        await this.$shoppingCart().click()
        await this.$sizeDropdown().click()
        await this.$mediumSize().click()
        await this.$addToCartBtn().click()
        await this.$cart().click()
        //validate the product in cart is same
        await this.$checkoutBtn().click()
    }

}

export default new FirstOption()