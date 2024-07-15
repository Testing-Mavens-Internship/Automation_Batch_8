class OrderSuccess {

    constructor()
    {
        this.$successHeader=()=> $('//h1[text()=" Your order has been placed!"]')
        this.$myAccount=()=> $('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
        this.$myOrder=()=> $('//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[2]/a/div/span')

    }

    
}

export default new OrderSuccess()
