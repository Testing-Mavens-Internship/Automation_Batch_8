class productPage extends basePage {
    constructor() {
        super()
        this.$cart=()=>$(`//button[text()="Add to Cart"]`)
        this.$buy=()=>$(`//*[local-name()="svg" and @viewBox="0 0 576 512"]`)
    }
    async clickCart(){
        await this.$cart().click()
    }
    async clickBuy(){
        await this.$buy().click()
    }
}
export default new productPage();