import Common from "./common.js";

class Component extends Common
{
    constructor()
    {
        super()
        this.$component=()=>$(`//a[text()='Components']`)
        this.$component_header=()=>$(`//h1[text()='Explore Components']`)
    }
    async selectComponents()
    {
        await this.$component().click()
    }
}
export default new Component()