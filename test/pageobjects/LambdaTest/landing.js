import Common from "./common.js";

class Landing extends Common {

    constructor()
    {
        super()
        this.$myAccount=()=> $('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
        this.$registerOption=()=> $('/html/body/div[1]/div[5]/header/div[3]/div[1]/div/div[3]/nav/div/ul/li[6]/ul/li[2]/a/div/span')
    }

    async hoverMyAccount()
    {
        await this.$myAccount().moveTo()
        await this.$registerOption().click();
    }

}

export default new Landing()
