import CommonPage from "./commonPage.js";
class SlidePage extends CommonPage{
    constructor(){
        super();
        this.$slider=()=>$('//input[@type="range"]')
    }
    /**
     * sliding the silder to zero value
     */
    async slide(){
        const slideSize=await this.$slider().getSize();
        await this.$slider().dragAndDrop({ x: -(slideSize).width, y: 0 })
    }
    /**
     * sliding the slider to hundred value
     */
    async slidetoHundred(){
        
        const slideSize=await this.$slider().getSize();
        await this.$slider().dragAndDrop({ x: (slideSize).width, y: 0 })
    }
}
export default new SlidePage();