import Common from "./common.js";

class LoadingAnimation extends Common{
    constructor(){
        super();
        this.$loader=()=>$(`//div[contains(@class,'animate-spin')]`);
        this.$contentLoader=()=>$(`//h1[text()="Content Loaded!"]`);
    }
}
export default new LoadingAnimation();