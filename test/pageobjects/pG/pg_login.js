import basePage from "./pg_common"
class loginPage extends basePage {
    constructor() {
        super();

        this.$userName = () => $('#user-name');
        this.$password = () => $('#password');
        this.$loginButton = () => $('//input[@id="login-button"]')
    }
    async login() {
        await (await this.$userName()).setValue('standard_user')
        await (await this.$password()).setValue('secret_sauce')
        await (await this.$loginButton()).click()
    }
}
export default new loginPage();