class MyAccount {

    constructor()
    {
        this.$myAccHeader=()=> $('//h2[text()="My Account"]')
        this.$editAccInfo=()=> $('//a[text()=" Edit your account information"]')
        this.$successMsg=()=> $('//div[text()=" Success: Your account has been successfully updated."]')
        this.$home=()=> $('//*[@id="widget-navbar-217834"]/ul/li[1]/a/div/span')
    }

    async clickEditAccInfo()
    {
        await this.$editAccInfo().click()
    }

    async clickHome()
    {
        await this.$home().click()
    }
}

export default new MyAccount()