import Common from "./common.js";

class HomePage extends Common
{
    constructor()
    {
        super()
        this.$tabs=(n)=>$(`//a[text()='${n}']`)
        this.$search=()=>$(`//input[@id="search"]`)
    }

    async search()
    {
        await this.$search().click()
        await this.$search().setValue('shirt')
    }
}
export default new HomePage()