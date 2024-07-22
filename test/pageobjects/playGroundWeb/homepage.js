import Common from "./common.js";

class Homepage extends Common{
    constructor(){
        super();
        this.$componentsTab=()=>$(`//a[text()="Components"]`);
        this.$componentsHeader=()=>$(`//h1[text()="Explore Components"]`);
        this.$loadingAnimationLearnMoreBtn=()=>$(`//h2[contains(text(),"Loading Animation Component")]/following-sibling::a`);
    }
    async clickingComponents(){
        await this.$componentsTab().click();
    }
    async loadingAnimationLearnMore(){
        await this.$loadingAnimationLearnMoreBtn().click();
    }
}
export default new Homepage();