import basePage from "./commonPage.js";

class landingPage extends basePage {
    constructor() {
        super()
        this.$header=()=>$('//a//div[text()="PlayGround"]')
        this.$userIcon=()=>$('//div[@class="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative"]')
        this.$loginIcon=()=>$('//li[text()="Login"]')    }


async clickUser() {
    await this.$userIcon().click()
}

async clickLogin() {
    await this.$loginIcon().click()
}



}
export default new landingPage()