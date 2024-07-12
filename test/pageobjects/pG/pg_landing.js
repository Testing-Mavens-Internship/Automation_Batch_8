 import basePage from "./pg_common"
 
 class LandingPage extends basePage {
    constructor() {
        super()
        this.$user = () => $(`//*[local-name()="svg" and @viewBox="0 0 320 512"]`)
        this.$logintxt = () => $(`[value="user"]`)
  
}
async clickUser() {
    await this.$user().click()
}
async clickLogin() {
    await this.$login().click()
}
async clickLogin() {
    await this.$login().click()
}

}

export default new LandingPage();
