import Common from "./common.js";

class Gesture extends Common{
    constructor(){
        super();
        this.$draggableBox=()=>$(`//div[@id="moveMe"]`);
        this.$draggableImage=()=>$(`//img[@id="dragMe"]`);
        this.$dropImageBox=()=>$(`//div[@id="div2"]`);
    }
    /**
     * Drag the 'AutomateNow' logo and drop it in the next box
     */
    async dragBox(){
        await this.$draggableImage().waitForDisplayed({timeout:5000,timeoutMsg:"Draggable image is still not displayed"});
        const source=await this.$draggableImage();
        const target=await this.$dropImageBox();
        await source.dragAndDrop(target);
    }
}
export default new Gesture();