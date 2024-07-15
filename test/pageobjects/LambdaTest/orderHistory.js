class OrderHistory {

    constructor()
    {
        this.$historyHeader=()=> $('//h1[text()="Order History"]')
        this.$viewBtn=()=> $('//a[@class="btn btn-info"]')
        this.$logout=()=> $('//a[text()=" Logout"]')
    }

    //validate price, address & name of the product

    async userLogout()
    {
        await this.$logout().click()
    }

}

export default new OrderHistory()