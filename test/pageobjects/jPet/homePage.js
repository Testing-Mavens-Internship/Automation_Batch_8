class HomePage extends Common{
    constructor(){
        super();
        this.$fishSelection=()=>$(`//img[@src="../images/sm_fish.gif"]`)
    }

    async clickFishSelection(){
        await this.$fishSelection().click();
    }
}
export default new HomePage()