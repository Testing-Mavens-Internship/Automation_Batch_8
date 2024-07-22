import Common from '../qaPlaground/common.js';
class Home extends Common{
    constructor(){
        super()
        this.$header=()=>$(`//span[text()="QA Playground"]`)
        this.$sortList=()=>$(`//h3[text()="Sortable List"]`)
        this.$redirect=()=>$(`//h3[text()="Redirect Chain"]`)
        this.$slider=()=>$(`//h3[text()="Rating Range Slider"]`)
    }
    /**
     * To click on sort list
     */
    async clickSort(){
        this.$sortList().click();
    }
    /**
     * To click on redirect
     */
    async clickRedirect(){
        this.$redirect().click();
    }
    /**
     * To click on slider
     */
    async clickSlider(){
        this.$slider().click();
    }
}
export default new Home();