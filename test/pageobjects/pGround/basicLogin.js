import basePage from "./commonPage.js";

class basicLogin extends basePage {
    constructor() {
        super()
        this.$header=()=>$('//h2[normalize-space()="PLAYGROUND"]')
        this.$username=()=>$('//div//input[@name="username"]')
        this.$password=()=>$('//div//input[@name="password"]')
        this.$loginButton=()=>$('//div//button[@type="submit"]')
    }

    async login() {

        await this.$username().setValue('playground')
        await this.$password().setValue('playground@TM')
        await this.$loginButton().click()
    }
}
export default new basicLogin()