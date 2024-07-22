import CommonPage from "./commonPage.js";


class LoadingAnimationPage extends CommonPage{
    constructor(){
        super();
        this.$loader=()=>$(`//div[contains(@class,'animate-spin')]`);
        this.$contentLoader=()=>$(`//h1[text()="Content Loaded!"]`);
    }
}
export default new LoadingAnimationPage();