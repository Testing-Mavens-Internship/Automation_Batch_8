class gateWay extends basePage {
    constructor() {
        super()
        this.$gateway = () => $(`[value="gateway"]`)
    }
    async clickGateway() {
        await  this.$gateway().click()
    }
   
}
export default new gateWay();