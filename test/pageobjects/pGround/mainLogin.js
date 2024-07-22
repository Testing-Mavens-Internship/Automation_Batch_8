import basePage from "./commonPage.js";

class mainLogin extends basePage {
    constructor() {
        super()
        this.$header=()=>$('//h2[normalize-space()="Welcome Back"]')
        this.$email=()=>$('//input[@name="email"]')
        this.$password=()=>$('//input[@name="password"]')
        this.$loginButton=()=>$('//button[normalize-space()="Login"]')
        this.$logoutButton=()=>$('//li[normalize-space()="Log Out"]')
    }

    async login() {
        await this.$email().setValue('aswinkrishna1312@gmail.com')
        await this.$password().setValue('123456')
        await this.$loginButton().click()

    }
}
export default new mainLogin()