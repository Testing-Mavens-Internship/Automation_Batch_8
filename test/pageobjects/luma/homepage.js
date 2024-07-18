import Common from "./common.js";

class HomePage extends Common
{
    constructor()
    {
        super()
    }
    async hoverCategory()
    {
        await this.$men().moveTo()
        await this.$top().moveTo()
        await this.$jacket().click()
    }
}
export default new HomePage()