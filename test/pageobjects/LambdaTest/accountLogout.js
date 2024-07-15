class AccountLogout {

    constructor()
    {
        this.$logoutHeader=()=> $('//h1[text()=" Account Logout"]')
    }
}

export default new AccountLogout()
