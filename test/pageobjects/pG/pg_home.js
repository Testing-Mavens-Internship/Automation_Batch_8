
class homePage extends basePage {
    constructor() {
        super()
        this.$shop = () => $(`[value="shop"]`)

    }
   
    async clickShop() {
        await this.$shop().click()
    }
}
export default new homePage();