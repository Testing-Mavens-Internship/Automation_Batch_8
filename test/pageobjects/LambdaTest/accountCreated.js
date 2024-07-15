class AccountCreated {

    constructor()
    {
        this.$accCreated=()=> $('//h1[text()=" Your Account Has Been Created!"]')
        this.$contBtn=()=> $('//a[text()="Continue"]')
    }

    async clickContinue()
    {
        await this.$contBtn().click()
    }
}

export default new AccountCreated()