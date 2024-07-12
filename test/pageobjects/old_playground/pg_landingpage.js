// import { $ } from '@wdio/globals'
import Common from "./pg_common.js";

class LandingPage extends Common{
    constructor()
    {
        super()
        this.$logo=()=>$(`//div[text()='PlayGround']`)
        this.$usericon=()=>$(`//*[name()='svg' and @viewBox='0 0 320 512']`)
        this.$login=()=>$(`//li[text()='Login']`)
    }
    validateLogo()
    {

    }
    clickUsericon()
    {

    }
    clickLogin()
    {

    }
}
export default new LandingPage()