import CommonPage from "./commonPage.js";

export class SliderElementPage extends CommonPage{
    constructor(){
        super();
        this.$initialValue=()=>$(`//span[@class="text-gray-600"]`);
        this.$slider=()=>$(`//input[@type="range"]`)
    }
    async moveSlider(){
        
       // const slide=await this.$slider()
       // await browser.execute((element)=>{
        //    element.value=100;
       // },slide)
       const element=await this.$slider();
       await element.dragAndDrop({ x: 50, y: 0 })
       
    }

    }

export default new SliderElementPage();